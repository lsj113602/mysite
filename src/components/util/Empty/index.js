import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { selectCartList } from '../../../store/product/selector';
import { setCart } from '../../../store/product/action';
import { commonPath } from '../../../config/path';

import './empty.scss';

const Empty = (props) => {
  const { text } = props;
  // 你可以在这使用 Hook
  const goHome = () => {
    window.location.replace('/');
  };
  return (
    <div className="empty">
      <img src={`${commonPath.IMG_CND_URL}/icon/empty.png`}/>
      {text}
      <div className="empty__btn"
          onClick={() => goHome()}
      >去首页</div>
    </div>
  );
}
Empty.propTypes = {
  text: PropTypes.string
};
const mapStateToProps = createStructuredSelector({
  cartList: selectCartList()
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(setCart(data))
  }
};
const ProductD= withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Empty));
export default withRouter(ProductD);
