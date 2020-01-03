import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect';
import './index.scss';
import { fetchIndexBanner } from '../../containers/requests/index';
import { fecthBannerList } from '../../store/homeInfo/action';
import { selectBannerList } from '../../store/homeInfo/selector';
import { commonPath } from '../../config/path';
import Header from '../../components/util/Header';
import Bottom from '../../components/util/Bottom';
import Banner from '../../components/util/Banner';
import Video from '../../components/Video';


class MainPage extends React.Component {
  static propTypes = {
    bannerList: PropTypes.array,
    getBanners: PropTypes.func
  };
  constructor(props, context) {
    console.log('constructor');
    super(props, context);
    this.state = {
      toggle: false,
      index: 0
    };
  }
  async componentDidMount() {
    const res = await fetchIndexBanner();
    this.props.getBanners(res.list);
  }
  render() {
    setTimeout(() => {
      console.log('bannerList:', this.props.bannerList.length)
    }, 5000);
    return (
      <div className="main">
        <Header />
        <div className="content">
            <Banner />
            <div className="content__body">
                <div className="content__category">
                    <div className="content__category__image">
                      <img className="content__category__img"
                          src={`${commonPath.IMG_CND_URL}index/jiaju.png`}
                      ></img>
                      <span className="content__category__image-span">家居空间</span>
                    </div>
                    <div className="content__category__image">
                      <img className="content__category__img"
                          src={`${commonPath.IMG_CND_URL}index/shangyong.png`}
                      ></img>
                      <span className="content__category__image-span">商用照明</span>
                    </div>
                </div>
                <div className="content__products">
                  <div className="content__products-image">
                    <img className="content__products-img"
                        src={`${commonPath.IMG_CND_URL}index/chanpin.png`}
                    ></img>
                    <span className="content__products-image-span">产品中心</span>
                  </div>
                </div>
                <div className="content__category content__category--low">
                    <div className="content__category__image content__category__image--low">
                      <img className="content__category__img"
                          src={`${commonPath.IMG_CND_URL}index/shehuizeren.png`}
                      ></img>
                      <span className="content__category__image-span">社会责任</span>
                    </div>
                    <div className="content__category__image content__category__image--low">
                      <img className="content__category__img"
                          src={`${commonPath.IMG_CND_URL}index/rencaipeiyang.png`}
                      ></img>
                      <span className="content__category__image-span">人才培养</span>
                    </div>
                </div>
                <div className="advertising"></div>
                <div className="activity">
                  <div className="activity__title">最新活动</div>
                  <div className="activity__items">
                    <div className="activity__item">
                      <div className="activity__item-content">宸曦极光新品发布会，让您遇见更美好的未来</div>
                      <div className="activity__item-time">2019-08-15</div>
                    </div>
                    <div className="activity__item">
                      <div className="activity__item-content">宸曦极光新品发布会，让您遇见更美好的未来</div>
                      <div className="activity__item-time">2019-06-15</div>
                    </div>
                    <div className="activity__item">
                      <div className="activity__item-content">宸曦极光新品发布会，让您遇见更美好的未来</div>
                      <div className="activity__item-time">2019-05-15</div>
                    </div>
                  </div>
                </div>
                <div className="brand">
                  <div className="brand__title">品牌资讯</div>
                  <div className="brand__items">
                    <div className="brand__item">
                      <img className="brand__img"
                          src={`${commonPath.IMG_CND_URL}index/fabu1.png`}
                      ></img>
                      <div className="brand__content">宸曦极光智能化工厂</div>
                      <span className="brand__time">2019-06-05</span>
                    </div>
                    <div className="brand__item">
                      <img className="brand__img"
                          src={`${commonPath.IMG_CND_URL}index/fabu2.png`}
                      ></img>
                      <div className="brand__content">宸曦极光智能化工厂</div>
                      <span className="brand__time">2019-02-25</span>
                    </div>
                  </div>
                </div>
                <div calssName="">
                <div className="brand__title">工厂实景</div>
                  <div className="videolist">
                    <div className="videolist__item">
                      <Video mobileImgSrc={`${commonPath.IMG_CND_URL}product/productCenter/pro_img02.jpg`}
                          videoSrc={`${commonPath.IMG_CND_URL}index/1.mp4`}
                      />
                    </div>
                    <div className="videolist__item">
                      <Video mobileImgSrc={`${commonPath.IMG_CND_URL}product/productCenter/pro_nav02.jpg`}
                          videoSrc={`${commonPath.IMG_CND_URL}index/2.mp4`}
                      />
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
// const mapStateToProps2 = (state) => {
//   console.log('state:', state.cityInfo.get('cityName'));
//   return {
//     cityName: selectCityName()
//   }
// };
const mapStateToProps = createStructuredSelector({
  bannerList: selectBannerList()
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: (data) => dispatch(fecthBannerList(data))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)