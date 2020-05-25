import React, { useCallback, useMemo } from 'react';
import { Button } from 'antd';
import useTodoList from './todoList';
import todolistMobile from './page.mobile';
import todolistPc from './page.pc';
import { useParams, useHistory } from 'react-router';

const TodoListPage: React.FC<{}> = () => {
  // const [data] = useRequest(getTodoList, { keywords: '', pageIndex: 1, pageSize: 10 }, []);
  const { platform } = useParams<{ platform: 'mobile' | 'pc' }>();
  const history = useHistory();
  const View = platform === 'mobile' ? todolistMobile : todolistPc;

  const {
    inputValue,
    setInputValue,
    dataSource,
    addTodoItem,
    updTodoItem,
    deleteTodoItem,
    setComplete,
    setUnComplete,
    toggleComplete
  } = useTodoList();

  const nextPlatformName = useMemo(() => (platform === 'pc' ? 'mobile' : 'pc'), [platform]);

  const togglePlatform = useCallback(() => {
    history.replace(`/todolist/${nextPlatformName}`);
  }, [history, nextPlatformName]);

  return (
    <div className="todolist-page">
      <Button onClick={togglePlatform}>切换到{nextPlatformName}</Button>

      <View
        inputValue={inputValue}
        setInputValue={setInputValue}
        dataSource={dataSource}
        addTodoItem={addTodoItem}
        updTodoItem={updTodoItem}
        deleteTodoItem={deleteTodoItem}
        setComplete={setComplete}
        setUnComplete={setUnComplete}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoListPage;
