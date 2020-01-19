
import { createSelector } from 'reselect';
import moment from 'moment';

const homeInfo = (state) => {
  console.log('homeInfo:', state);
  return state.homeInfo;
};

const selectBannerList = () => createSelector(
  homeInfo,
  (state) => (state && state.get('bannerList')) || []
);

const selectHomeArticleList = () => createSelector(
  homeInfo,
  (state) => {
     const list = state && state.get('articleList') || [];
     console.log('list', list);
     const arr =list.filter(d => d.state === 1)
       .sort((a, b) => moment(b.create_time).format('YYYY-MM-DD') < moment(a.create_time).format('YYYY-MM-DD'))
       .splice(0, 5);
     console.log('arr', arr);
     return arr;
  }
);

export {
  selectBannerList,
  selectHomeArticleList
};
