import { useState, useEffect } from 'react';
import { parseJson } from '@/utils/tools';

interface UseLocalStorageOption {
  expireAge?: number;
  updateWhenInit?: boolean;
}

type StorageUpdater<T> = (updatedData: T) => void;

const DEFAULT_OPTION = {
  expireAge: 0
};

function useLocalStorage(key: string, defaultValue: unknown, options: UseLocalStorageOption = DEFAULT_OPTION): [any, StorageUpdater<any>] {
  const storagedValue = localStorage.getItem(key);
  const initialValue = storagedValue ? parseJson(storagedValue) : defaultValue;
  const [memoizedStorage, setMemoizedStorage] = useState(initialValue as unknown);
  const updater = (updatedData: unknown) => {
    const serializedValue = JSON.stringify(updatedData);
    localStorage.setItem(key, serializedValue);
    setMemoizedStorage(updatedData);
    if (options.expireAge && options.expireAge > 0) {
      localStorage.setItem(`${key}__expiration`, (Date.now() + options.expireAge).toString())
    }
  }
  
  if (options.expireAge && options.expireAge > 0) {
    const time = localStorage.getItem(`${key}__expiration`);
    if (time) {
      const timeInNumber = parseInt(time, 10);
      if (Date.now() - timeInNumber > options.expireAge) {
        localStorage.removeItem(`${key}__expiration`);
        localStorage.removeItem(key);
      }
    }
  }

  useEffect(() => {
    updater(initialValue);
  }, [initialValue]);

  return [memoizedStorage, updater];
}

export {
  useLocalStorage,
  StorageUpdater
}