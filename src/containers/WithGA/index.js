import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class WithGA extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  componentDidMount() {
  }
  render() {
    // page change
    const { children } = this.props;
    return children;
  }
}

export default withRouter(WithGA);
