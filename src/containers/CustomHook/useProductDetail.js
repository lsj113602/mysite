import { useState } from 'react';

function useProductDetail() {
  const [productObj, setProductObj] = useState([]);
  function getProductById(key) {
    setProductObj([key]);
  }
  return {productObj, getProductById};
}
export default useProductDetail;