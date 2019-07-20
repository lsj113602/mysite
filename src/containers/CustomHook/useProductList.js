import { useState, useEffect } from 'react';

function useProductList(key) {
  const [list, setList] = useState([]);
  useEffect(() => {
    function getProductList(key) {
      setList([key]);
    }
    console.log('--------------------------------');
    getProductList(key);
    return () => {
      console.log('after-->useEffect');
    };
  }, [key]);
  return list;
}
export default useProductList;