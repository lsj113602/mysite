import { setLocalStorage, getLocalStorage } from './unit.js';
import { MY_CART } from '../config/constants.js';

export const addCart = (productId) => {
  const cartArr = getLocalStorage(MY_CART)?getLocalStorage(MY_CART).split(',') : [];
  const idx = cartArr.findIndex(c => parseInt(c) === productId);
  if (idx > -1) {
    cartArr.splice(idx, 1);
    cartArr.unshift(productId);
  } else {
    cartArr.push(productId)
  }
  setLocalStorage(MY_CART, cartArr.join(','));
  return cartArr;
};

export const delCart = (productId) => {
  const cartArr = (getLocalStorage(MY_CART) || '').split(',');
  const idx = cartArr.findIndex(c => parseInt(c) === parseInt(productId));
  cartArr.splice(idx, 1);
  setLocalStorage(MY_CART, cartArr.join(','));
  return cartArr;
};

export const getCart = () => {
  var value = window.localStorage.getItem(MY_CART) || '';
  return value ? value.split(',') : [];
};