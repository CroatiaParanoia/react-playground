import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import TodoList from './pages/TodoList';
import NotFound from './pages/404';

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/todolist/:platform" component={TodoList} />
        <Redirect exact from="/todolist" to="/todolist/pc" />
        <Route exact path="/404" component={NotFound} />
        <Redirect exact from="/*" to="/404" />
      </Switch>
    </Router>
  );
}

export default RouterComponent;
