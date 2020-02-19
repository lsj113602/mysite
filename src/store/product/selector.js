
import { createSelector } from 'reselect';

const productInfo = (state) => {
  return state.productInfo;
};

const selectCartList = () => createSelector(
  productInfo,
  (state) => (state && state.get('cartList')) || []
);

export {
  selectCartList
};
