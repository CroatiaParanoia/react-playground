import React from 'react';
import request from '@utils/request';

type ListItem = { value: string; id: string; isFinish: boolean };

const TodoList: React.FC<{}> = () => {
  const [list, setList] = React.useState<ListItem[]>([]);

  React.useEffect(() => {
    request<ListItem[]>('/api/list').then(res => {
      console.log(res, 'res');
      setList(res.data || []);
    });
  }, [setList]);

  console.log(list, 'list');
  return (
    <div>
      {list.map(item => <div key={item.id}>{item.value}</div>)}
    </div>
  );
};

export default TodoList;
