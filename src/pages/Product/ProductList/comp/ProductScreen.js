import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../../../components/product/ProductList';
import './index.scss';

const ProductScreen = ({p_key, data}) => {
  // 你可以在这使用 Hook
  console.log(p_key);
  const navList = [
    {
      id: 0,
      name: '综合'
    },
    {
      id: 1,
      name: '人气'
    },
    {
      id: 2,
      name: '新品'
    }
  ];
  const [nav, setNav] = useState(0);

  return (
    <div className="screen">
      <div className="screen__list">
        {
          navList.map(item =>
          <span className={nav === item.id ? 'screen__list__item screen__list__item--select' : 'screen__list__item'}
              key={item.id}
              onClick={() => setNav(item.id)}
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