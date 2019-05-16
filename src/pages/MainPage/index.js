import React from 'react';
import ReactSwipe from 'react-swipe';
import './index.scss';
import IndexPop from '../../components/pop/IndexPop';


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
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    let opt = {
      auto: 2000,
      callback: function(index) {
        console.log(index);
        this.setState({index: Number(index)})
      }.bind(this)
    }
    const language = <div className="header__language">Language</div>
    return (
      <div className="main">
        {this.state.toggle?<IndexPop />:''}
        <div className="header">
          <div className="header__wrapper">
            {this.state.toggle ? language : '晨曦极光'}
            <div className={this.state.toggle ? 'header__switch header__switch--cur' : 'header__switch'}
                onClick={this.toggleChange}
            >
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
            </div>
          </div>
        </div>
        <div className="content">
            <div className="banner">
              <ReactSwipe className="carousel"
                  swipeOptions={opt}
              >
                <div className="carousel-item">
                  <img className="banner_img"
                      src="http://www.opple.com.cn/upload/1106/1541508496.jpg"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img className="banner_img"
                      src="http://www.opple.com.cn/upload/indexbanner.png"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img className="banner_img"
                      src="http://www.opple.com.cn/web/static/oppo_m/images/index3.jpg"
                  ></img>
                </div>
              </ReactSwipe>
              <div className="banner__container">
                  <span className={this.state.index === 0 ? 'banner__bullet selected': 'banner__bullet'}></span>
                  <span className={this.state.index === 1 ? 'banner__bullet selected': 'banner__bullet'}></span>
                  <span className={this.state.index === 2 ? 'banner__bullet selected': 'banner__bullet'}></span>
              </div>
            </div>
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
        <div className="bottom">
            <div className="bottom__item">
              <div className="bottom__icon">
                <img className="bottom__icon"
                    src="http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon05.png"
                ></img>
              </div>
              家居空间
            </div>
            <div className="bottom__item">
              <div className="bottom__icon">
                <img className="bottom__icon"
                    src="http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon06.png"
                ></img>
              </div>
              商用照明
            </div>
            <div className="bottom__item">
              <div className="bottom__icon">
                <img className="bottom__icon"
                    src="http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon07.png"
                ></img>
              </div>
              产品中心
            </div>
            <div className="bottom__item">
            <div className="bottom__icon">
              <img className="bottom__icon"
                  src="http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon09.png"
              ></img>
            </div>
              客户服务
            </div>
        </div>
      </div>
    )
  }
}
export default MainPage