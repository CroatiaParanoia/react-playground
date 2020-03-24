import React from 'react';
import { useDeepCompareEffect } from 'react-use';

export default function useRequest<R, T>(
  requestFn: (p: R) => Promise<ResponseBody<T>>,
  params: R,
  initState: T
): [T] {
  const [data, setData] = React.useState<T>(initState);
  useDeepCompareEffect(() => {
    requestFn(params).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, [params]);

  return [data];
}
