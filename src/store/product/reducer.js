import { fromJS } from 'immutable';
import { SET_CART } from './constants';

const product = fromJS({
  cartList: []
});

export default function (state = product, action) {
  switch (action.type) {
    case `${SET_CART}`:
      return state.set('cartList', action.payload);
    default:
      return state;
  }
}

