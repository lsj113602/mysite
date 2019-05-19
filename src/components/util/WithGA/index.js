import React from 'react';
import { withRouter } from 'react-router-dom';

class WithGA extends React.Component {
  componentDidMount() {
  }
  render() {
    // page change
    const { children } = this.props;
    return children;
  }
}

export default withRouter(WithGA);
