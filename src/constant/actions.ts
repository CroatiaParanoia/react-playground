import request from '@utils/request';
import * as apis from './apis';

interface GetTodoListParams {
  keywords: string;
  pageIndex: number;
  pageSize: number;
}

interface TodoListItem {
  value: string;
  isFinish: boolean;
  id: string;
}

export const getTodoList = ({ keywords = '', pageIndex = 1, pageSize = 10 }: GetTodoListParams) =>
  request<TodoListItem[]>(apis.getTodoList, {
    method: 'GET',
    data: { keywords, pageIndex, pageSize }
  });

export const a = {};
