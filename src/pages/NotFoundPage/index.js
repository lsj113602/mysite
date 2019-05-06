import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const textData = {
  title: 'Oops',
  h2: '页面找不到,可能迷路了',
  text: '错误代码:404',
  dec: '也许你可以去这里：',
};


class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    location: PropTypes.object,
  }
  render() {
    return (
      <div>
        <h2>{textData.h2}</h2>
        <Link to={'/'} >{textData.dec}</Link>
      </div>
    );
  }
}

export default NotFound;
