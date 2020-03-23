import React from 'react';
import Todolist from '@src/components/TodoList';
import { getTodoList } from '@src/constant/actions';
import useRequest from '@src/hooks/useRequest';

const TodoListPage: React.FC<{}> = () => {
  const [data] = useRequest(getTodoList, { keywords: '', pageIndex: 1, pageSize: 10 }, []);

  return (
    <div className="todolist-page">
      <Todolist dataSource={data} />
    </div>
  );
};

export default TodoListPage;
