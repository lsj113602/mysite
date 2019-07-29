import React from 'react';
import './index.scss';
import { commonPath } from '../../../config/path';
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
                  src={`${commonPath.IMG_CND_URL}product/productCenter/pro_nav01.jpg`}
              />
              智能导购
            </div>
            <div className="content__nav__item">
              <img className="content__nav__img"
                  src={`${commonPath.IMG_CND_URL}product/productCenter/pro_nav02.jpg`}
              />
              场景体验
            </div>
            <div className="content__nav__item">
              <img className="content__nav__img"
                  src={`${commonPath.IMG_CND_URL}product/productCenter/pro_nav02.jpg`}
              />
              价格计算器
            </div>
          </div>
          <div className="content__products">
            <div className="content__products__title">
              <img className="content__products__title-img"
                  src={`${commonPath.IMG_CND_URL}product/productCenter/icon01.png`}
              />
              <span className="content__products__title-span">家居</span>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div1">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img01.jpg`}
                ></img>
                <div className="content__products__img-span"><span>家居灯具</span></div>
              </div>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img02.jpg`}
                ></img>
                <div className="content__products__img-span"><span>艺术开关</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img03.jpg`}
                ></img>
                <div className="content__products__img-span"><span>家具能源</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img04.jpg`}
                ></img>
                <div className="content__products__img-span"><span>集成家居</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img05.jpg`}
                ></img>
                <div className="content__products__img-span"><span>厨卫电器</span></div>
              </div>
            </div>


            <div className="content__products__title">
              <img className="content__products__title-img"
                  src={`${commonPath.IMG_CND_URL}product/productCenter/icon02.png`}
              />
              <span className="content__products__title-span">专业照明</span>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div1 content__products__ul-div1--h">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img06.jpg`}
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>家居灯具</span></div>
              </div>
            </div>
            <div className="content__products__ul">
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img07.jpg`}
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>生鲜灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img08.jpg`}
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>路灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img09.jpg`}
                ></img>
                <div className="content__products__img-span content__products__img-span--blue"><span>筒灯</span></div>
              </div>
              <div className="content__products__ul-div2">
                <img className="content__products__img"
                    src={`${commonPath.IMG_CND_URL}product/productCenter/pro_img10.jpg`}
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