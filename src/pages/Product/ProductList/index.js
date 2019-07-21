import React from 'react';
// import { commonPath } from '../../../config/path';
import './index.scss';
import Header from '../../../components/util/Header';
import Bottom from '../../../components/util/Bottom';
import ProductScreen from './comp/ProductScreen';



class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggle: false,
      history: ['卧室灯' , '餐厅灯', '客厅灯长方形', '吊灯客厅', '客厅灯具', '客厅灯现代简约' ],
      p_key: 'lsj',
      type: 33
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  changeKey = () => {
    this.setState({ p_key: this.state.p_key + '1'});
  }
  render() {
    return (
      <div className="list">
        <Header />
        <div className="content">
          <div className="top">
            <div className="search">
              <div className="search__content">
                <input className="search__input"
                    placeholder="请输入关键字进行搜索"
                />
                <button className="search__btn">搜索</button>
              </div>
              <div className="search__history">
                {
                  this.state.history.map((item, idx) => (
                    <span className="search__history__span"
                        key={idx}
                    >{item}</span>))
                }
              </div>
            </div>
          </div>
          <div className="">
            <ProductScreen p_key={this.state.p_key}/>
          </div>
        </div>
        <Bottom />
      </div>

    )
  }
}
export default ProductList