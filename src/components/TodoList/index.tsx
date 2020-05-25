import React from 'react';
import { Checkbox, Button, List } from 'antd';

interface ListItem {
  value: string;
  id: string;
  isFinish: boolean;
}

const TodoItem: React.FC<ListItem & {
  onDelete?: (id: string) => void;
  onChange?: (id: string) => void;
  checked?: boolean;
}> = ({ value, isFinish, id, checked, onDelete, onChange }) => (
  <div className="w100-percent df ac jsb pl12 pr12" style={{ height: 40 }}>
    <Checkbox checked={checked} onChange={() => onChange?.(id)}>
      <span style={{ textDecoration: isFinish ? 'line-through' : '' }}>{value}</span>
    </Checkbox>

    <Button type="ghost" onClick={() => onDelete?.(id)}>
      删除
    </Button>
  </div>
);

const TodoList: React.FC<{ dataSource: ListItem[] }> = ({ dataSource }) => (
  <div>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={dataSource}
      renderItem={(item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          value={item.value}
          isFinish={item.isFinish}
          checked={false}
        />
      )}
    />
  </div>
);

export default TodoList;
