import React from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function RouterComponent() {
  return (
    <Router>
      <Route path="/" component={() => <Button>123</Button>} />
    </Router>
  );
}

export default RouterComponent;
