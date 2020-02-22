import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { selectCartList } from '../../../store/product/selector';
import { setCart } from '../../../store/product/action';

import { getCart } from '../../../utils/cartUnit';
import Header from '../../../components/util/Header';
import { useProductList } from '../../../containers/CustomHook/useProductDetail';
import './productCart.scss';
import ProductList from '../../../components/product/ProductList';
import Empty from '../../../components/util/Empty';

const ProductDetail = (props) => {
  const { cartList } = props;
  // 你可以在这使用 Hook
  // const [cart, setCart] = useState([]);
  // console.log('cart:', cart);
  const {productList, getProductList} = useProductList();
  useEffect(() => {
    const arr = getCart() || [];
    getProductList({ids: arr.length>0?arr.join(','):0});
    return () => {
    };
  }, [cartList]);
  return (
    <div className="cart">
      <Header title="我的对比列表"/>
      {
        productList.length>0 ?
          <ProductList data={productList}
              hideBtn="true"/> :
          <Empty text="还没有加入任何产品～"/>
      }

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
