// import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

import {
  CHANGE_CITY_NAME
} from './constants';
// import * as actionTypes from './constants';
const cityInfo = {
  cityName: '北京'
};


export default function (state = cityInfo, action) {
  const ca = CHANGE_CITY_NAME
  switch (action.type) {
    case ca:
      return action.data;
    default:
      return state;
  }
}

