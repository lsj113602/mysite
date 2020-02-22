import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { selectCartList } from '../../../store/product/selector';
import { setCart } from '../../../store/product/action';

import { addCart, getCart, delCart } from '../../../utils/cartUnit';
import Header from '../../../components/util/Header';
import Banner from '../../../components/util/Banner';
import ProductItem from '../../../components/product/ItemSmall';
import NoMore from '../../../components/util/NoMore';
import { useProductDetail, useProductList } from '../../../containers/CustomHook/useProductDetail';
import './index.scss';

const ProductDetail = (props) => {
  // 你可以在这使用 Hook
  const { addToCart, cartList } = props;
  const { id } = props.match.params;
  const {productObj, getProductById} = useProductDetail();
  const {productList, getProductList} = useProductList();
  const [cart, setCart] = useState([]);
  const banners = [{icon: productObj.logoImg}];
  useEffect(() => {
    getProductById(id);
    getProductList(id);
    const arr = getCart();
    setCart(arr);
    return () => {
    };
  }, [id]);
  const descArr = (productObj.desc && productObj.desc.split(';')) || [];
  const images = productObj.imgList && productObj.imgList.length > 0 &&
    productObj.imgList.map((img, idx) =>
      <img className="desc-img"
          key={idx}
          src={img}
      />);
  const isExist = cart.find(c => parseInt(c) === parseInt(id));
  const btn_text = isExist ? '取消对比' : '加入对比';
  const add = (id) => {
    let arr = [];
    if (isExist) {
      arr = delCart(id);
    } else {
      arr = addCart(id);
    }
    // 存redux
    addToCart(arr);
    setCart(arr);
  };
  const toCart = () => {
    props.history.push('/productCart');
  };
  return (
    <div className="desc">
      <Header />
      <div className="product">
        <div className="title">{productObj.title}</div>
        <Banner banners={banners} />
        <div className="info">
          <span className="info__title">产品介绍</span>
          {
            descArr.map((d, idx) => <p key={idx}>{d}</p>)
          }
        </div>
        <div className="product__add"
            onClick={() => add(productObj.id)}
        >{btn_text}</div>
        <div className="product__desc">
          <div className="desc-title">参数配置</div>
          <table
              className="desc-table"
          >
            <tbody>
              <tr>
                <td>类型</td>
                <td>{productObj.type}</td>
              </tr>
              <tr>
                <td>商品价格(元)</td>
                <td>{productObj.price}（元）</td>
              </tr>
              <tr>
                <td>商品原价格</td>
                <td>{productObj.oldPrice || '--'}</td>
              </tr>
              <tr>
                <td>商品标签</td>
                <td>{productObj.tags}</td>
              </tr>
              <tr>
                <td>商品单位</td>
                <td>{productObj.unit}</td>
              </tr>
              <tr>
                <td>规格尺寸(mm)</td>
                <td>{productObj.spec}</td>
              </tr>
              <tr>
                <td>功率（W）</td>
                <td>{productObj.power}</td>
              </tr>
              <tr>
                <td>应用空间</td>
                <td>{productObj.applySpace}</td>
              </tr>
              <tr>
                <td>商品热度</td>
                <td>{productObj.hotNum}</td>
              </tr>
              <tr>
                <td>商品备注</td>
                <td>{productObj.remark}</td>
              </tr>
            </tbody>
          </table>
          {images &&
          <div className="desc-imgs">
            <div className="desc-title">图文详情</div>
            {images}
          </div>}
        </div>
      </div>
      <div className="recommend">
        <div className="recommend__title">
          <span className="recommend__title--text">相关推荐</span>
          <span className="recommend__title--btn">换一批</span>
        </div>
        <div className="recommend__list">
          {
            productList && productList.length > 0 && productList.map((p, idx) => {
              return(
                <div className="recommend__item"
                    key={idx}
                >
                  <ProductItem data={p} />
                </div>)
            })
          }
        </div>
        <NoMore />
      </div>
      <div className="go_cart"
          onClick={() => toCart()}
      >
        开始对比<p>({cartList.length || 0})</p>
      </div>
    </div>
  );
}
ProductDetail.propTypes = {
  p_key: PropTypes.string
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
)(ProductDetail));
export default withRouter(ProductD);
