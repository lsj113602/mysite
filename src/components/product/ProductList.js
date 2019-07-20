import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import useProductList from '../../containers/CustomHook/useProductList'
import userTest from '../../containers/CustomHook/userTest'

const ProductList = ({p_key, type}) => {
  // 你可以在这使用 Hook
  console.log('before:', p_key, type);
  const list = useProductList(p_key);
  console.log('after:', list)
  const { countryData, handleCountry } = userTest();
  // handleCountry(p_key);
  const ss = () => {
    handleCountry('syj');
  }
  useEffect(() => {
    console.log('...............');
    handleCountry(p_key);
  }, [p_key]);
  return <div onClick={ss}>点击{countryData.data}</div>;
}
ProductList.propTypes = {
  p_key: PropTypes.string,
  type: PropTypes.number
};

export default ProductList;