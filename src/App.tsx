import React from 'react';
import './App.scss';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div>
      <Button type="danger" onClick={() => history.push('/todolist')}>
        去TodoList
      </Button>
    </div>
  );
}

export default App;
