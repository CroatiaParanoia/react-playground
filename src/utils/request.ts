import axios, { AxiosStatic } from 'axios';
import { Modal } from 'antd';

function errorModal(title: string) {
  Modal.error({
    title,
  });
}

axios.defaults.timeout = 10000; // 超时时间

axios.interceptors.request.use(
  (config: any) => {
    Object.assign(config.headers, {
      'X-Auth-Token': '666',
      'Content-Type': 'application/json',
    });
    return config;
  },
  error => {
    errorModal('请求超时，请稍后重试！');
    return Promise.reject(error);
  },
);
// http响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.status === 403) {
      errorModal('没有权限');
      throw new Error('没有权限');
    }
    return res;
  },
  error => {
    errorModal('请求失败，请稍后重试！');
    return Promise.reject(error);
  },
);

const request = <T>(...arg: Parameters<AxiosStatic>) => axios(...arg).then(res => res.data as Promise<ResponseBody<T>>);

export default request;
