import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './item.scss';
// import { addProductToCart } from '../../containers/requests/product';
import { selectCartList } from '../../store/product/selector';
import { setCart } from '../../store/product/action';
// import { commonPath } from '../../config/path';

const ProductList = ({data, addToCart, cartList, history}) => {
  console.log('cartList:', cartList);
  // 你可以在这使用 Hook
  const addCart = (obj) => {
    addToCart([obj, ...cartList]);
  };
  const changePDP = (id) => {
    console.log('id:', id);
    history.push(`/productDetail/${id}`);
  };
  const apply = data.applySpace.split(',').map((d, idx) => {return (<span key={idx}>{d}</span>)});
  return (
    <div className="product-item"
        onClick={() => changePDP(data.id)}
    >
      <div className="product-item__left">
        <img className="product-item__img"
            src={data.logoImg}
        />
      </div>
      <div className="product-item__right">
        <div className="product-item__info">
          <p className="product-item__title">{data.title}</p>
          <p className="product-item__p">功率（W）：{data.power}</p>
          <p className="product-item__sale">规格尺寸(mm)：{data.spec}</p>
          <p className="product-item__type">应用空间：{apply}</p>
        </div>
        <div className="product-item__add"
            onClick={() => addCart(data)}
        >
          <div className="product-item__add__btn">加入对比</div>
        </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));