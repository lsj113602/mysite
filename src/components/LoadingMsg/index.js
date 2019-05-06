import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class LoadingMsg extends React.Component {

  componentDidMount() {
    if (this.props.redirectPath) {
      this.timer = setTimeout(() => {
        this.props.history.replace(this.props.redirectPath);
      }, 3500);
    }
  }

  componentWillUnmount() {
    if (this.props.redirectPath) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div>{this.props.msg}</div>
    );
  }
}

LoadingMsg.propTypes = {
  msg: PropTypes.string,
  redirectPath: PropTypes.string,
  history: PropTypes.object,
  // history: PropTypes.object.isRequired,
};

export default withRouter(LoadingMsg);
