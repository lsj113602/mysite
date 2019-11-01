import { fromJS } from 'immutable';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

import {
  FETCH_LINK_LIST
} from './constants';

// The initial state of the App
const initialState = fromJS({
  linkList: fromJS({
    loading: false,
    data: false,
    error: false
  })
});

function memberReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_LINK_LIST}_${PENDING}`:
      return state
        .setIn(['linkList', 'loading'], true)
        .setIn(['linkList', 'error'], false);
    case `${FETCH_LINK_LIST}_${FULFILLED}`:
      return state.setIn(['linkList', 'loading'], false)
        .setIn(['linkList', 'data'], action.payload.data || false)
        .setIn(['linkList', 'error'], false);
    case `${FETCH_LINK_LIST}_${REJECTED}`:
      return state.setIn(['linkList', 'loading'], false)
        .setIn(['linkList', 'data'], false)
        .setIn(['linkList', 'error'], (action.payload.response || {}).data);
    default:
      return state;
  }
}

export default memberReducer;
