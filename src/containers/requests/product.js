import axios from 'axios';
import { apiPath} from '../../config/path';


export const fetchProduct = async (payload) => {
  try {
    const res = await axios.get(apiPath.GET_PRODUCT_LIST, { params: { ...payload } });
    if (res.data && res.data.code === 0) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductDesc = async (payload) => {
  try {
    const res = await axios.get(apiPath.GET_PRODUCT_DESC, { params: { ...payload } });
    if (res.data && res.data.code === 0) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};


export const addProductToCart = async (id) => {
  const payload = {
    id,
    uid: 'admin'
  };
  try {
    const res = await axios.post(apiPath.ADD_CART, { params: { ...payload } });
    if (res.data && res.data.code === 0) {
      return '添加成功';
    }
  } catch (err) {
    console.log(err);
  }
};
export default {};
