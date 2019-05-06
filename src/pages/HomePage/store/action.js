// import axios from 'axios';

import {
  ADD_COUNT,
  MINUS_COUNT
} from './constants';

export function addCount(num) {
  console.log('action -- addCount')
  return {
    type: ADD_COUNT,
    num,
  };
}

export function minusCount(num) {
  return {
    type: MINUS_COUNT,
    num,
  };
}

