import React from 'react';
import { Input, List, Space, Button } from 'antd';
import { PageProps } from './types';
const TodoList: React.FC<PageProps> = ({
  dataSource,
  addTodoItem,
  inputValue,
  setInputValue,
  deleteTodoItem,
  toggleComplete
}) => {
  return (
    <div>
      <div>这是PC端页面</div>
      <div>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={(e) => addTodoItem(inputValue)}
        />
      </div>
      <div>
        <List
          size="small"
          bordered
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item className="df jsb">
              <div>{item.label}</div>
              <Space>
                <Button type="ghost" onClick={() => deleteTodoItem(item.key)}>
                  删除
                </Button>
                <Button type="primary" onClick={() => toggleComplete(item.key)}>
                  {item.isComplete ? '取消完成' : '完成'}
                </Button>
              </Space>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoList;
