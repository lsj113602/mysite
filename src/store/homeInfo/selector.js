
import { createSelector } from 'reselect';

const homeInfo = (state) => {
  console.log('homeInfo:', state);
  return state.homeInfo;
};

const selectBannerList = () => createSelector(
  homeInfo,
  (state) => state && state.get('bannerList')
);

export {
  selectBannerList
};
