
import {
  SET_CART
} from './constants';

export const setCart = async (data) => {
  return {
    type: SET_CART,
    payload: data
  };
};
