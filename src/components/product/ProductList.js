import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import useProductList from '../../containers/CustomHook/useProductList'
import userTest from '../../containers/CustomHook/userTest'
import Itme from './Item'
import './productList.scss';

const ProductList = ({p_key, type}) => {
  // 你可以在这使用 Hook
  console.log('before:', p_key, type);
  const list = useProductList(p_key);
  console.log('after:', list)
  const { countryData, handleCountry } = userTest();
  // handleCountry(p_key);
  console.log(countryData);
  useEffect(() => {
    console.log('...............');
    handleCountry(p_key);
  }, [p_key]);
  return (
    <div>
      <Itme />
      <Itme />
      <Itme />
      <Itme />
      <div className="go_cart">
        开始对比<p>(0)</p>
      </div>
    </div>
  );
}
ProductList.propTypes = {
  p_key: PropTypes.string,
  type: PropTypes.number
};

export default ProductList;