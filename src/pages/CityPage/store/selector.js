
import { createSelector } from 'reselect';
import {  } from './constants';

const cityInfo = (state) => state.get('cityInfo');

const selectCityName = () => createSelector(
  cityInfo,
  (state) => state && state.get('cityName')
);

export {
  selectCityName
};
