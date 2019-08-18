import React from 'react';
import PropTypes from 'prop-types';
import './item.scss';
import { commonPath } from '../../config/path';

const ProductList = ({data}) => {
  // 你可以在这使用 Hook
  console.log(data);
  return (
    <div className="product">
      <div className="product__left">
        <img className="product__img"
            src={`${commonPath.IMG_CND_URL}product/info/1.jpg`}
        />
      </div>
      <div className="product__right">
        <div className="product__info">
          <p className="product__title">MZX3434-12W-现代简约</p>
          <p className="product__p">功率（W）：20W</p>
          <p className="product__sale">规格尺寸(mm)：240*340*75mm</p>
          <p className="product__type">应用空间：卧室</p>
        </div>
        <div className="product__add">
          <div className="product__add__btn">加入对比</div>
        </div>
      </div>
    </div>
  );
}
ProductList.propTypes = {
  data: PropTypes.object
};

export default ProductList;