import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoList from './TodoList';

function RouterComponent() {
  return (
    <Router>
      <Route exact path="/" component={() => <span>这是首页</span>} />
      <Route exact path="/todolist" component={TodoList} />
    </Router>
  );
}

export default RouterComponent;
