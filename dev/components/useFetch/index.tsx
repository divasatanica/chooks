import React, { useState, useCallback } from 'react';
import { useFetch } from '../../../src';

const getData = (params) => {
  return new Promise(r => {
    setTimeout(() => {
      r({name: 'coma', age: 15 + Math.round(Math.random() * 15), page: params.page })
    }, 1000);
  })
};

const Data = ({ page }) => {
  console.log('Render Data');
  const params = { page }; 
  const _getData = useCallback(() => {
    return getData(params);
  }, [page, getData]);
  // const _getData = () => getData(params);
  const { result, loading } = useFetch(_getData);
  if (loading) {
    return <p>Loading.....</p>
  }
  return (
    <div>
      <p>name: { result.name }</p>
      <p>age: { result.age }</p>
      <p>page: { page }</p>
    </div>
  )
}

export default function UseFetch() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Data page={page}/>
      <button onClick={() => setPage(p => p + 1)}>Next Page</button>
    </div>
  )
}