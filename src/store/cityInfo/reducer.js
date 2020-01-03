// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { fromJS } from 'immutable';
import { CHANGE_CITY_NAME, CHANGE_CITY_NAME1 } from './constants';
// import * as actionTypes from './constants';
// const cityInfo = {
//   cityName: '北京'
// };
// The initial state of the App
const cityInfo = fromJS({
  cityName: '北京',
  departureDate: '',
  productInfo: {
    loading: false,
    error: false,
    data: false
  }
});



export default function (state = cityInfo, action) {
  const ca = CHANGE_CITY_NAME;
  switch (action.type) {
    case ca:
      return { ...state.cityInfo, cityName: action.cityName };
    case CHANGE_CITY_NAME1:
      return state.set('cityName', action.cityName)
        .set('departureDate', '')
        .setIn(['productInfo', 'data'], false)
        .setIn(['productInfo', 'error'], false);
    default:
      return state;
  }
}

