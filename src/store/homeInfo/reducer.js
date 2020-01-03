import { fromJS } from 'immutable';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { DEL_BANNER, FECTH_BANNER_LIST } from './constants';

const homeInfo = fromJS({
  bannerList: [],
  name: ''
});

export default function (state = homeInfo, action) {
  console.log('action:', action);
  switch (action.type) {
    case DEL_BANNER:
      return state.set('bannerList', []);
    case `${FECTH_BANNER_LIST}_${FULFILLED}`: console.log(10);
      return state.set('bannerList', action.payload.list);
    case `${FECTH_BANNER_LIST}_${PENDING}`: console.log(20);
      return state.set('name', '');
    case `${FECTH_BANNER_LIST}_${REJECTED}`: console.log(30);
      return state.set('name', '');
    case `${FECTH_BANNER_LIST}`: console.log(40);
      return state.set('bannerList', action.payload.list);
    default:
      return state;
  }
}

