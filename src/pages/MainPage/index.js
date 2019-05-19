import React from 'react';
import './index.scss';
import Header from '../../components/util/Header';
import Bottom from '../../components/util/Bottom';
import Banner from '../../components/util/Banner';


class MainPage extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
    this.state = {
      toggle: false,
      index: 0
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
            <Banner />
            <div className="content__body">
                <div className="content__category">
                    <div className="content__category__image">
                      <img className="content__category__img"
                          src="http://www.opple.com.cn/web/ucan/images/about/homepic01.jpg"
                      ></img>
                      <span className="content__category__image-span">家居空间</span>
                    </div>
                    <div className="content__category__image">
                      <img className="content__category__img"
                          src="http://www.opple.com.cn/web/ucan/images/about/homepic02.jpg"
                      ></img>
                      <span className="content__category__image-span">商用照明</span>
                    </div>
                </div>
                <div className="content__products">
                  <div className="content__products-image">
                    <img className="content__products-img"
                        src="http://www.opple.com.cn/web/ucan/images/about/homepic03.jpg"
                    ></img>
                    <span className="content__products-image-span">产品中心</span>
                  </div>
                </div>
                <div className="content__category content__category--low">
                    <div className="content__category__image content__category__image--low">
                      <img className="content__category__img"
                          src="http://www.opple.com.cn/web/ucan/images/about/homepic04.jpg"
                      ></img>
                      <span className="content__category__image-span">社会责任</span>
                    </div>
                    <div className="content__category__image content__category__image--low">
                      <img className="content__category__img"
                          src="http://www.opple.com.cn/web/ucan/images/about/homepic05.jpg"
                      ></img>
                      <span className="content__category__image-span">人才培养</span>
                    </div>
                </div>
                <div className="advertising"></div>
                <div className="activity">
                  <div className="activity__title">最新活动</div>
                  <div className="activity__items">
                    <div className="activity__item">
                      <div className="activity__item-content">欧普“超越所见”发布会，重新定义未来智慧生活</div>
                      <div className="activity__item-time">2019-04-15</div>
                    </div>
                    <div className="activity__item">
                      <div className="activity__item-content">欧普“超越所见”发布会，重新定义未来智慧生活</div>
                      <div className="activity__item-time">2019-04-15</div>
                    </div>
                    <div className="activity__item">
                      <div className="activity__item-content">欧普“超越所见”发布会，重新定义未来智慧生活</div>
                      <div className="activity__item-time">2019-04-15</div>
                    </div>
                  </div>
                </div>
                <div className="brand">
                  <div className="brand__title">品牌资讯</div>
                  <div className="brand__items">
                    <div className="brand__item">
                      <img className="brand__img"
                          src="http://www.opple.com.cn/upload/20190409/1555377489.png"
                      ></img>
                      <div className="brand__content">欧普“超越所见”发布会，重新定义未来智慧生活</div>
                      <span className="brand__time">2019-04-15</span>
                    </div>
                    <div className="brand__item">
                      <img className="brand__img"
                          src="http://www.opple.com.cn/upload/20181109/1548147655.jpg"
                      ></img>
                      <div className="brand__content">欧普“超越所见”发布会，重新定义未来智慧生活</div>
                      <span className="brand__time">2019-04-15</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <Bottom />
      </div>
    )
  }
}
export default MainPage