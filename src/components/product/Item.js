import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './item.scss';
import { addCart, delCart } from '../../utils/cartUnit';
// import { addProductToCart } from '../../containers/requests/product';
import { selectCartList } from '../../store/product/selector';
import { setCart } from '../../store/product/action';
// import { commonPath } from '../../config/path';

const ProductList = ({data, addToCart, cartList, history}) => {
  // 你可以在这使用 Hook
  const [isExist, setIsExist] = useState(false);
  useEffect(() => {
    const isExist = cartList.find(c => parseInt(c) === parseInt(data.id));
    setIsExist(isExist);
    return () => {
    };
  }, [cartList]);
  const add = (obj) => {
    let arr = [];
    if (isExist) {
      arr = delCart(obj.id);
    } else {
      arr = addCart(obj.id);
    }
    addToCart(arr);
  };
  const changePDP = (id) => {
    history.push(`/productDetail/${id}`);
  };
  const apply = data.applySpace.split(',').map((d, idx) => {return (<span key={idx}>{d}</span>)});
  return (
    <div className="product-item">
      <div className="product-item__left"
          onClick={() => changePDP(data.id)}
      >
        <img className="product-item__img"
            src={data.logoImg}
        />
      </div>
      <div className="product-item__right">
        <div className="product-item__info"
            onClick={() => changePDP(data.id)}
        >
          <p className="product-item__title">{data.title}</p>
          <p className="product-item__p">功率（W）：{data.power}</p>
          <p className="product-item__sale">规格尺寸(mm)：{data.spec}</p>
          <p className="product-item__type">应用空间：{apply}</p>
        </div>
        <div className="product-item__add"
            onClick={() => add(data)}
        >
          <div className={isExist? 'product-item__add__btn product-item__add__btn--reduce':'product-item__add__btn'}>{isExist?'取消对比':'加入对比'}</div>
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