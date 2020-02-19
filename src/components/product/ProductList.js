import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import useProductList from '../../containers/CustomHook/useProductList'
import userTest from '../../containers/CustomHook/userTest'
import { selectCartList } from '../../store/product/selector';
import Itme from './Item'
import './productList.scss';

const ProductList = ({p_key, type, data, cartList}) => {
  // 你可以在这使用 Hook
  console.log('before:', p_key, type);
  const list = useProductList(p_key);
  console.log('after:', list)
  const { countryData, handleCountry } = userTest();
  // handleCountry(p_key);
  console.log(countryData);
  useEffect(() => {
    handleCountry(p_key);
  }, [p_key]);
  return (
    <div>
      {
        data.map((d, idx) => (
          <Itme
              data={d}
              key={idx}
          />))
      }
      <div className="go_cart">
        开始对比<p>({cartList.length})</p>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);