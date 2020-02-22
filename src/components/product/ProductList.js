import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { getCart } from '../../utils/cartUnit';
import useProductList from '../../containers/CustomHook/useProductList'
import userTest from '../../containers/CustomHook/userTest'
import { selectCartList } from '../../store/product/selector';
import Itme from './Item';
import NoMore from '../../components/util/NoMore';
import './productList.scss';

const ProductList = ({p_key, data, hideBtn, history}) => {
  // 你可以在这使用 Hook
  const list = useProductList(p_key);
  const cartArr = getCart();
  console.log('after:', list);
  const { countryData, handleCountry } = userTest();
  // handleCountry(p_key);
  console.log(countryData);
  useEffect(() => {
    handleCountry(p_key);
  }, [p_key]);
  const toCart = () => {
    history.push('/productCart');
  };
  return (
    <div>
      {
        data.map((d, idx) => (
          <Itme
              data={d}
              key={idx}
          />))
      }
      {
        !hideBtn &&
        <div className="go_cart"
            onClick={() => toCart()}>
          开始对比<p>({cartArr.length})</p>
        </div>
      }
      <NoMore />
    </div>
  );
}
ProductList.propTypes = {
  p_key: PropTypes.string,
  type: PropTypes.number
};

const mapStateToProps = createStructuredSelector({
  cartList: selectCartList()
});
const mapDispatchToProps = () => {
  return {
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));