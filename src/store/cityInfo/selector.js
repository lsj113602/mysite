
import { createSelector } from 'reselect';

const cityInfo = (state) => {
  console.log('state::', state.cityInfo);
  // state.get('cityInfo')
  return state.cityInfo;
};

const selectCityName = () => createSelector(
  cityInfo,
  (state) => state && state.get('cityName')
);

export {
  selectCityName
};
