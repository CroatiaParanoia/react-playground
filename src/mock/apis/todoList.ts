import Mock from 'mockjs';
import { baseUrl } from '../constant';

export default () => {
  Mock.mock(`${baseUrl}/list`, 'get', {
    success: true,
    message: '请求成功',
    'data|20-50': [
      {
        'value|1-10': () => Mock.Random.cparagraph(1),
        'id|5': '',
        'isFinish|1': false,
      },
    ],
  });
};
