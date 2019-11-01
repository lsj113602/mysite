import axios from 'axios'
import { getLinkAll } from '../../../api/link';
import { TOKEN } from 'config/constants';
import { setCookie } from 'utils/cookieUtils';

import {
  FETCH_LINK_LIST
} from './constants';

export function fetchLinkList(payload) {
  return {
    type: FETCH_LINK_LIST,
    payload: getLinkAll(payload)
  };
}

export function fetchLinkList1(url) {
  return {
    type: FETCH_LINK_LIST,
    payload: axios.get(url).then((res) => {
      const { token } = res.data;
      if (token) {
        setCookie(TOKEN, token);
      }
      return res;
    })
  };
}
