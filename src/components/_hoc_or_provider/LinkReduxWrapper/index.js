import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import PropTypes from 'prop-types';

import reducer from './reducer';
import {
  fetchLinkList
} from './actions';
import {
  selectLinkAll
} from './selectors';

/**
 * This class function as a redux wrapper, which provides actions and selectors for its children
 */
export class LinkReduxWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const { children, ...props } = this.props;
    return children(props); // turn your HOC into renderProp
  }
}

const mapStateToProps = createStructuredSelector({
  linkList: selectLinkAll()
});

const mapDispatchToProps = (dispatch) => ({
  fetchLinkList: (payload) => dispatch(fetchLinkList(payload))
});

const withReducer = injectReducer({ key: 'link', reducer });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect)(LinkReduxWrapper);
