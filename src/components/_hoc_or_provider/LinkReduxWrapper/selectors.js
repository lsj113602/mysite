/**
 * member state selectors
 */
import { createSelector } from 'reselect';

const selectLink = (state) => state.get('link');

// Select member info
const selectLinkAll = () => createSelector(
  selectLink,
  (memberState) => memberState.getIn(['linkList', 'data'])
);

export {
  selectLinkAll
};
