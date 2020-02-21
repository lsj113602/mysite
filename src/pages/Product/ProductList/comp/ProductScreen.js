import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../../../components/product/ProductList';
import './index.scss';

const ProductScreen = ({p_key, data, switchNav}) => {
  // 你可以在这使用 Hook
  console.log(p_key);
  const navList = [
    {
      id: 0,
      name: '综合'
    },
    {
      id: 1,
      name: '人气',
      key: 'hotNum'
    },
    {
      id: 2,
      name: '新品',
      key: 'sort'
    }
  ];
  const [nav, setNav] = useState(0);
  useEffect(() => {
    switchNav(nav.key);
    return () => {
      console.log('after-->useEffect');
    };
  }, [nav]);

  return (
    <div className="screen">
      <div className="screen__list">
        {
          navList.map(item =>
          <span className={nav.id === item.id ? 'screen__list__item screen__list__item--select' : 'screen__list__item'}
              key={item.id}
              onClick={() => setNav(item)}
          >{item.name}</span>)
          }
        <span className="screen__list__btn">开始筛选</span>
      </div>
      <ProductList data={data}/>
    </div>
  );
}
ProductScreen.propTypes = {
  p_key: PropTypes.string,
  data: PropTypes.array
};

export default ProductScreen;