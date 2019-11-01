import axios from 'axios';
import { apiPathObj } from '../config/path';

const getOrderRepeat = async (params) => {
  console.log(params);
  const res = await axios.get(apiPathObj.GATEKEEPER_API_PRODUCT, {
    params: { productIds: Array.isArray(params.productIds)}
  });
  return res;
};
const getOrderListAll = async (params) => {
  console.log(params);
  const res = await axios.get(apiPathObj.GATEKEEPER_API_PRODUCT, {
    params: { productIds: Array.isArray(params.productIds)}
  });
  return res;
};

export {
  getOrderListAll,
  getOrderRepeat
};