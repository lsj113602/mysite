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
    return (
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
    )
  }
}
export default MainPage