import React from 'react';
import './index.css';


class MainPage extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="main">
        <div className="head">兴旺照明</div>
        <div className="content">
            <div className="banner">
                <img className="banner_img"
                    src="http://www.opple.com.cn/upload/1106/1541508496.jpg"
                ></img>
            </div>
            <div className="page_body">
                <div className="product_category">
                    <img className="category_img"
                        src="http://www.opple.com.cn/web/ucan/images/about/homepic01.jpg"
                    ></img>
                    <img className="category_img"
                        src="http://www.opple.com.cn/web/ucan/images/about/homepic02.jpg"
                    ></img>
                </div>
                <div className="products">
                    <img className="products_img"
                        src="http://www.opple.com.cn/web/ucan/images/about/homepic03.jpg"
                    ></img>
                </div>
                <div className="advertising"></div>
                <div className="activity"></div>
                <div className="brand_news"></div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom_item">家居空间</div>
            <div className="bottom_item">商用照明</div>
            <div className="bottom_item">产品中心</div>
            <div className="bottom_item">客户服务</div>
        </div>
      </div>
    )
  }
}
export default MainPage