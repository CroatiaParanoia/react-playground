declare global {
  type ResponseBody<T> = { code: number; message: string; data: T };
}

export {};
