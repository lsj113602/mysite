// import axios from 'axios';

import {
  CHANGE_CITY_NAME
} from './constants';

export function change(data) {
  return {
    type: CHANGE_CITY_NAME,
    data
  };
}
