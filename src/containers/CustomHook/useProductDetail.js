import { useState } from 'react';
import { fetchProductDesc, fetchProduct } from '../requests/product';

const useProductDetail = () => {
  const [productObj, setProductObj] = useState([]);
  const getProductById = async (pId) => {
    const res = await fetchProductDesc({id: pId});
    console.log('data:', res);
    setProductObj(res);
  }
  return {productObj, getProductById};
}
const useProductList = () => {
  const [productList, setProductObj] = useState([]);
  const getProductList = async () => {
    const res = await fetchProduct({});
    console.log('data:', res);
    setProductObj(res.list || []);
  }
  return {productList, getProductList};
}
export {
  useProductDetail,
  useProductList
};