import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { selectCartList } from '../../../store/product/selector';
import { setCart } from '../../../store/product/action';

import './noMore.scss';

const NoMore = (props) => {
  console.log(props);
  return (
    <div className="no_more">
      没有更多了～
    </div>
  );
}
NoMore.propTypes = {
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
const noMore= withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoMore));
export default withRouter(noMore);
