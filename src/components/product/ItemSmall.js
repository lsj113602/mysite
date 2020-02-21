import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './itemsmall.scss';
import { addCart, delCart, getCart } from '../../utils/cartUnit';
import { selectCartList } from '../../store/product/selector';
import { setCart } from '../../store/product/action';

const ProductList = ({data = {}, addToCart, history}) => {
  // 你可以在这使用 Hook
  const [cart, setCart] = useState([]);
  const isExist = cart.find(c => parseInt(c) === parseInt(data.id));
  const btn_text = isExist ? '取消对比' : '加入对比';
  useEffect(() => {
    const arr = getCart();
    setCart(arr);
    return () => {
    };
  }, [data.id]);
  const add = (obj) => {
    console.log('obj:', obj.id);
    let arr = [];
    if (isExist) {
      arr = delCart(obj.id);
    } else {
      arr = addCart(obj.id);
    }
    addToCart(arr);
    setCart(arr);
  };
  const changePDP = (id) => {
    history.push(`/productDetail/${id}`);
    // props.history.push();
  };
  return (
    <div className="small">
      <div className="small__top"
          onClick={() => changePDP(data.id)}
      >
        <img className="small__logoImg"
            src={data.logoImg || 'http://134.175.218.206/images/product/info/1.jpg'}
        />
        <div className="small__title">{data.title}</div>
      </div>
      <div className="small__add"
          onClick={() => add(data)}
      >
        {btn_text}
      </div>
    </div>
  );
};
ProductList.propTypes = {
  data: PropTypes.object
};
const mapStateToProps = createStructuredSelector({
  cartList: selectCartList()
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(setCart(data))
  }
};
const Filter= withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList));

export default Filter;