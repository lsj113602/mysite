import React from 'react';
import ReactSwipe from 'react-swipe';
import './index.scss';


class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      bannerList: [
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon05.png',
          text: '家居空间',
          linkUrl: ''
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon06.png',
          text: '商用照明',
          linkUrl: ''
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon07.png',
          text: '产品中心',
          linkUrl: ''
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon09.png',
          text: '客户服务',
          linkUrl: ''
        }
      ]
    };
  }
  componentDidMount() {
  }
  render() {
    let opt = {
      auto: 2000,
      callback: function(index) {
        console.log(index);
        this.setState({index: Number(index)})
      }.bind(this)
    }
    return (
      <div className="banner">
        <ReactSwipe className="carousel"
            swipeOptions={opt}
        >
          <div className="carousel-item">
            <img className="banner__img"
                src="http://www.opple.com.cn/upload/1106/1541508496.jpg"
            ></img>
          </div>
          <div className="carousel-item">
            <img className="banner__img"
                src="http://www.opple.com.cn/upload/indexbanner.png"
            ></img>
          </div>
          <div className="carousel-item">
            <img className="banner__img"
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
    )
  }
}
export default Banner