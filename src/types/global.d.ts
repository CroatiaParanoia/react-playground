declare global {
  interface ResponseBody<T> { code: number; message: string; data: T }
}

export {};
