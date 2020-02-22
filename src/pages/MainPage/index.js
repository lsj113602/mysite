import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect';
import { groupBy } from 'lodash';
import moment from 'moment';
import './index.scss';
// import { fetchIndexBanner } from '../../containers/requests/index';
import { fecthBannerList, getArticleList } from '../../store/homeInfo/action';
import { selectBannerList, selectHomeArticleList } from '../../store/homeInfo/selector';
import { commonPath } from '../../config/path';
import Header from '../../components/util/Header';
import Bottom from '../../components/util/Bottom';
import Banner from '../../components/util/Banner';
import Video from '../../components/Video';


class MainPage extends React.Component {
  static propTypes = {
    bannerList: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
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
    this.props.getBanners();
    this.props.getArticle();
    // const res = await fetchIndexBanner();
    // this.props.getBanners(res.list);
    // const arr = groupBy(res.list, 'type');
  }
  render() {
    const arr = this.props.bannerList;
    const dataObj = groupBy(arr, 'type');
    const banner1 = dataObj['1'] || []; // 首页轮播图
    const banner2 = dataObj['2'] || []; // 产品类别
    const banner3 = dataObj['3'] || []; // 产品中心
    const banner4 = dataObj['4'] || []; // 公司计划
    const banner5 = dataObj['5'] || []; // 视频
    const banner6 = dataObj['6'] || []; // 公司新闻
    const banner7 = dataObj['7'] || []; // 品牌资讯

    const article = this.props.articleList;
    console.log('banner:', banner1, banner2, banner3, banner4, banner5, banner6, banner7, article);
    return (
      <div className="main">
        <img className="imgHidden"
            src={`${commonPath.IMG_CND_URL}index/navbck.png`}
        />
        <Header />
        <div className="content">
            <Banner banners={banner1} />
            <div className="content__body">
                {/*第一个栏位*/}
                <div className="content__category">
                  {
                    banner2.map((d) => (
                      <div className="content__category__image"
                          key={d.icon}
                      >
                        <img className="content__category__img"
                            src={d.icon}
                        ></img>
                        <span className="content__category__image-span">{d.name}</span>
                      </div>))
                  }
                </div>
                {/**/}
                <div className="content__products">
                  {
                    banner3.map((d) => (
                      <div className="content__products-image"
                          key={d.icon}
                      >
                        <img className="content__products-img"
                            src={d.icon}
                        ></img>
                        <span className="content__products-image-span">{d.name}</span>
                      </div>))
                  }
                </div>
                {/**/}
                <div className="content__category content__category--low">
                  {
                    banner4.map((d, idx) => (
                      <div className="content__category__image content__category__image--low"
                          key={idx}
                      >
                        <img className="content__category__img"
                            src={d.icon}
                        ></img>
                        <span className="content__category__image-span">{d.name}</span>
                      </div>
                    ))
                  }
                </div>
                <div className="advertising"></div>
                <div className="activity">
                  <div className="activity__title">最新活动</div>
                  <div className="activity__items">
                    {
                      article.map((a, idx) => (
                        <div className="activity__item"
                            key={idx}
                        >
                          <div className="activity__item-content">{a.title}</div>
                          <div className="activity__item-time">{moment(a.create_time).format('YYYY-MM-DD')}</div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="brand">
                  <div className="brand__title">品牌资讯</div>
                  <div className="brand__items">
                    {
                      banner7.map((d, idx) => (
                        <div className="brand__item"
                            key={idx}
                        >
                          <img className="brand__img"
                              src={d.icon}
                          ></img>
                          <div className="brand__content">{d.name}</div>
                          <span className="brand__time">{moment(d.create_time).format('YYYY-MM-DD')}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="">
                <div className="brand__title">工厂实景</div>
                  <div className="videolist">
                    {
                      banner5.map((d, idx) => (
                        <div className="videolist__item"
                            key={idx}
                        >
                          <Video mobileImgSrc={d.icon}
                              videoSrc={d.src}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>

            </div>
        </div>
        <Bottom cur="home"/>
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
  bannerList: selectBannerList(),
  articleList: selectHomeArticleList()
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: () => dispatch(fecthBannerList()),
    getArticle: () => dispatch(getArticleList())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)