import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import TodoList from './pages/TodoList';
import NotFound from './pages/404';

function RouterComponent() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/todolist" component={TodoList} />
      <Route exact path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Router>
  );
}

export default RouterComponent;
