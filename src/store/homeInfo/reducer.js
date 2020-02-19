import { fromJS } from 'immutable';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';
import { DEL_BANNER, FECTH_BANNER_LIST, FECTH_ARTICLE_LIST } from './constants';

const homeInfo = fromJS({
  bannerList: [],
  articleList: [],
  name: ''
});

export default function (state = homeInfo, action) {
  console.log('action1111:', action);
  switch (action.type) {
    case DEL_BANNER:
      return state.set('bannerList', []);
    case `${FECTH_BANNER_LIST}_${FULFILLED}`:
      return state.set('bannerList', action.payload.list);
    case `${FECTH_BANNER_LIST}_${PENDING}`:
      return state.set('name', '');
    case `${FECTH_BANNER_LIST}_${REJECTED}`:
      return state.set('name', '');
    case `${FECTH_BANNER_LIST}`:
      return state.set('bannerList', action.payload.list);
    case `${FECTH_ARTICLE_LIST}`:
      return state.set('articleList', action.payload.list);
    default:
      return state;
  }
}

