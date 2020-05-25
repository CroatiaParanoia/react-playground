import React from 'react';
import { Input, Button, Space } from 'antd';
import { PageProps } from './types';
const TodoList: React.FC<PageProps> = ({
  dataSource,
  addTodoItem,
  inputValue,
  setInputValue,
  deleteTodoItem,
  setComplete,
  toggleComplete
}) => {
  return (
    <div>
      <div>这是移动端页面</div>

      <div>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={(e) => addTodoItem(inputValue)}
        />
      </div>
      <div>
        {dataSource.map((v) => {
          return (
            <div key={v.key} className="w100-percent fdr df jsb ac mt12 mb12">
              <div style={{ textDecoration: v.isComplete ? 'line-through' : '' }}>{v.label}</div>

              <Space>
                <Button type="ghost" onClick={() => deleteTodoItem(v.key)}>
                  删除
                </Button>
                <Button type="primary" onClick={() => toggleComplete(v.key)}>
                  {v.isComplete ? '取消完成' : '完成'}
                </Button>
              </Space>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
