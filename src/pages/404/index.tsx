import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NotFoundPage: React.FC<{}> = () => {
  const history = useHistory();
  const toTodolistPage = React.useCallback(() => {
    history.push('/');
  }, []);

  return (
    <div className="not-found-page">
      <div>404 没找到哦</div>
      <Button type="danger" onClick={toTodolistPage}>
        去首页
      </Button>
    </div>
  );
};

export default NotFoundPage;
