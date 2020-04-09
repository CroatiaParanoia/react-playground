import React from 'react';
import './App.scss';
import DynamicForm from '@src/components/DynamicForm';

const defaultSelectedList = [
  {
    attrName: '型号',
    attrId: '100001',
    attrValues: ['大陆版', '港版', '台版']
  },
  {
    attrName: '颜色',
    attrId: '100002',
    attrValues: ['红', '白', '黑']
  },
  {
    attrName: '内存',
    attrId: '100003',
    attrValues: ['64G', '32G', '16G']
  }
];

function App() {
  return (
    <div className="ml12 pl12">
      <DynamicForm dataSource={defaultSelectedList} value={[]} />
    </div>
  );
}

export default App;
