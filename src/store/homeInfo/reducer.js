import { fromJS } from 'immutable';
import { PENDING, REJECTED } from 'redux-promise-middleware';
import { DEL_BANNER, FECTH_BANNER_LIST } from './constants';

const homeInfo = fromJS({
  bannerList: []
});

export default function (state = homeInfo, action) {
  console.log('action:', action);
  switch (action.type) {
    case DEL_BANNER:
      return state.set('bannerList', []);
    case `${FECTH_BANNER_LIST}`: console.log('actionaction:', action);
      return state.set('bannerList', action.data);
    case `${FECTH_BANNER_LIST}_${PENDING}`:
      return state.set('bannerList', []);
    case `${FECTH_BANNER_LIST}_${REJECTED}`:
      return state.set('bannerList', []);
    default:
      return state;
  }
}

