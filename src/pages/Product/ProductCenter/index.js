import React from 'react';
import './index.scss';
import Header from '../../../components/util/Header';
import Bottom from '../../../components/util/Bottom';
import Banner from '../../../components/util/Banner';



class ProductList extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
    this.state = {
      toggle: false
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
      <div className="products">
        <Header />
        <div className="content">
          <Banner />
          <div className="content__nav">
            <div className="content__nav__item">
              <img className="content__nav__img"
                  src="http://www.opple.com.cn/web/ucan/images/phone/pro_nav01.jpg"
              />
              智能导购
            </div>
            <div className="content__nav__item">
              <img className="content__nav__img"
                  src="http://www.opple.com.cn/web/ucan/images/phone/pro_nav02.jpg"
              />
              场景体验
            </div>
            <div className="content__nav__item">
              <img className="content__nav__img"
                  src="http://www.opple.com.cn/web/ucan/images/phone/pro_nav03.jpg"
              />
              价格计算器
            </div>
          </div>
          <div className="content__products">
            <div className="content__products__title">
              <img className="content__products__title-img"
                  src="http://www.opple.com.cn/web/ucan/images/phone/icon01.png"
              />
              <span className="content__products__title-span">家居</span>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div1">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/web/ucan/images/phone/pro_phone_img02.jpg"
                ></img>
                <div className="content__products__img-span"><span>家居灯具</span></div>
              </div>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/upload/ucan/pro_img03.jpg"
                ></img>
                <div className="content__products__img-span"><span>艺术开关</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/upload/ucan/pro_img04.jpg"
                ></img>
                <div className="content__products__img-span"><span>家具能源</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/upload/ucan/pro_img05.jpg"
                ></img>
                <div className="content__products__img-span"><span>集成家居</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/upload/ucan/pro_img13.jpg"
                ></img>
                <div className="content__products__img-span"><span>厨卫电器</span></div>
              </div>
            </div>


            <div className="content__products__title">
              <img className="content__products__title-img"
                  src="http://www.opple.com.cn/web/ucan/images/phone/icon02.png"
              />
              <span className="content__products__title-span">专业照明</span>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div1 content__products__ul-div1--h">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/upload/ucan/pro_img11.jpg"
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>家居灯具</span></div>
              </div>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/web/ucan/images/phone/pro_phone_img14.jpg"
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>生鲜灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/web/ucan/images/phone/pro_phone_img15.jpg"
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>路灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/web/ucan/images/phone/pro_phone_img16.jpg"
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>筒灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src="http://www.opple.com.cn/web/ucan/images/phone/pro_phone_img10.jpg"
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>智能控制系统</span></div>
              </div>
            </div>

          </div>
        </div>
        <Bottom />
      </div>

    )
  }
}
export default ProductList