import axios from 'axios';
import { apiPath} from '../../config/path';
import { fetchIndexBanner } from '../../containers/requests/index'

import {
  FECTH_BANNER_LIST
} from './constants';

export const fecthBannerList2 = async () => {
  return {
    type: FECTH_BANNER_LIST,
    payload: await fetchIndexBanner()
  };
}

export const fecthBannerList = () => {
  return {
    type: FECTH_BANNER_LIST,
    payload: axios.get(apiPath.INDEX_BANNER_LIST).then((res) => {
      if (res.data && res.data.code === 0) {
        return res.data.data;
      }
    })
  };
}

export const fecthBannerList1 = (data) => {
  return {
    type: FECTH_BANNER_LIST,
    payload: data
  };
}