import axios from 'axios';
import { apiPath} from '../../config/path';
import { fetchIndexBanner } from '../../containers/requests/index'

import {
  FECTH_BANNER_LIST
} from './constants';

export function fecthBannerList2() {
  return {
    type: FECTH_BANNER_LIST,
    data: fetchIndexBanner()
  };
}

export const fecthBannerList1 = async () => {
  return {
    type: FECTH_BANNER_LIST,
    data: await axios.get(apiPath.INDEX_BANNER_LIST).then((res) => {
      return res.data.data;
    })
  };
}

export const fecthBannerList = (data) => {
  return {
    type: FECTH_BANNER_LIST,
    data: data
  };
}