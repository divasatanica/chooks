import { useEffect, useState } from 'react';

type SuspenseStatus = 'pending' | 'error' | 'resolved';

interface IUseFetchOptions {
  method?: string;
  data?: {[x: string]: any};
  headers?: Headers | undefined;
}

function useFetch(service: () => PromiseLike<any>/*, options?: IUseFetchOptions*/) {
  const [status, setStatus] = useState<SuspenseStatus>('pending');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchResult = service();
    fetchResult.then(r => {
      setResult(r);
      setStatus('resolved');
    }, err => {
      result.current = err;
      setStatus('error');
    });

    return () => {
      setStatus('pending');
      setResult(null);
    };
  }, [service]);
  
  return {
    result,
    status,
    loading: status === 'pending'
  };
}

export {
  useFetch,
  IUseFetchOptions
}