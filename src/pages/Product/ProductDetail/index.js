import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import useProductDetail from '../../../containers/CustomHook/useProductDetail';
import './index.scss';

const ProductDetail = (props) => {
  // 你可以在这使用 Hook
  console.log(111, props.match.params);
  const { id } = props.match.params;
  const {productObj, getProductById} = useProductDetail();
  console.log(productObj);
  useEffect(() => {
    console.log(111, props);
    getProductById(id);
    return () => {
      console.log('after-->useEffect');
    };
  }, [id]);

  const changeProductDetail = (id) => {
    props.history.push(`/productDetail/${id}`);
  }
  return (
    <div className="screen"
        onClick={() => changeProductDetail(2)}
    >
      切换{productObj}
    </div>
  );
}
ProductDetail.propTypes = {
  p_key: PropTypes.string
};

export default withRouter(ProductDetail);
