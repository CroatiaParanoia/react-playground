import { useCallback, useState } from 'react';
import { TodoItem } from './types';
import uuid from 'uuid';

type PartialTodoItem = Partial<TodoItem>;

export default () => {
  const [dataSource, setDataSource] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');
  const transTodoItem = useCallback(
    (key: string, assignInfo: PartialTodoItem | ((item: TodoItem) => PartialTodoItem)) => {
      return dataSource.map((v) => {
        if (v.key === key) {
          return {
            ...v,
            ...(typeof assignInfo === 'function' ? assignInfo(v) : assignInfo)
          };
        }
        return v;
      });
    },
    [dataSource]
  );

  const createTodoItem = useCallback((label: string): TodoItem => {
    return {
      label,
      isComplete: false,
      key: uuid.v4()
    };
  }, []);

  const setCompleteStatus = useCallback(
    (key: string, isComplete: boolean) => {
      const newDataSource = transTodoItem(key, { isComplete });
      console.log(newDataSource, '2222');
      setDataSource(newDataSource);
    },
    [transTodoItem, setDataSource]
  );

  const setComplete = useCallback(
    (key: string) => {
      setCompleteStatus(key, true);
    },
    [setCompleteStatus]
  );

  const setUnComplete = useCallback(
    (key: string) => {
      setCompleteStatus(key, false);
    },
    [setCompleteStatus]
  );

  const toggleComplete = useCallback(
    (key: string) => {
      setDataSource(
        transTodoItem(key, (item) => {
          return {
            isComplete: !item.isComplete
          };
        })
      );
    },
    [transTodoItem]
  );

  const deleteTodoItem = useCallback((key: string) => {
    setDataSource((dataSource) => {
      return dataSource.filter((v) => v.key !== key);
    });
  }, []);

  const addTodoItem = useCallback(
    (label: string) => {
      if (!label) return;
      setDataSource((dataSource) => {
        return [...dataSource, createTodoItem(label)];
      });
      setInputValue('');
    },
    [createTodoItem]
  );

  const updTodoItem = useCallback(
    (key: string, label: string) => {
      setDataSource(transTodoItem(key, { label }));
    },
    [transTodoItem]
  );

  return {
    inputValue,
    setInputValue,
    dataSource,
    addTodoItem,
    deleteTodoItem,
    updTodoItem,
    setComplete,
    setUnComplete,
    toggleComplete
  };
};
