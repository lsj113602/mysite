import React from 'react';
import ReactSwipe from 'react-swipe';
import './index.scss';
import { commonPath } from '../../../config/path';


class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      bannerList: []
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
                src={`${commonPath.IMG_CND_URL}index/index_banner1.png`}
            ></img>
          </div>
          <div className="carousel-item">
            <img className="banner__img"
                src={`${commonPath.IMG_CND_URL}index/index_banner2.jpg`}
            ></img>
          </div>
          <div className="carousel-item">
            <img className="banner__img"
                src={`${commonPath.IMG_CND_URL}index/index_banner3.jpg`}
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