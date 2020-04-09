declare global {
  interface ResponseBody<T> {
    code: number;
    message: string;
    data: T;
  }
  type PickComponentParam<Component, Key> = React.ComponentProps<Component>[Key];
}

export {};
