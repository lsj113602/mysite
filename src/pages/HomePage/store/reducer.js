import { fromJS } from 'immutable';
// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

import {
  ADD_COUNT,
  MINUS_COUNT
} from './constants';

// The initial state of the App
const initialState = fromJS({
  age: 0,
  name: '张三'
});

// const initialState = {
//   age: 0,
//   name: '张三',
// };

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      console.log('productReducer')
      return state.set('age', state.get('age') + action.num);
    case MINUS_COUNT:
      return state.set('age', state.get('age') - action.num);
    default:
      return state;
  }
}

export default productReducer;
