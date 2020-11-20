import React from 'react';
import { useLocalStorage, useDebounce } from '../../src';

export default function Storage() {
  console.log('Render Storage');
  
  const [storage, setStorage] = useLocalStorage('test-storage', '');
  const updateStorage = useDebounce(
    data => {
      setStorage(data)
    },
    500
  );
  const onStorageInputChange = e => {
    updateStorage(e.target.value);
  }

  return (
    <>
      <input onChange={onStorageInputChange}></input>
      <span>Storage Value: {storage}</span>
    </>
  )
}