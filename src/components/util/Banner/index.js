import React from 'react';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';
import './index.scss';


class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0
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
    };
    const list = Array.isArray(this.props.banners) && this.props.banners.map((d) => (
      <div className="carousel-item"
          key={d.icon}
      >
        <img className="banner__img"
            src={d.icon}
        ></img>
      </div>
    ));
    const containerList = Array.isArray(this.props.banners) && this.props.banners.map((d, idx) => (
      <span className={this.state.index === idx ? 'banner__bullet selected': 'banner__bullet'}
          key={idx}
      >
      </span>
    ));
    return (
      <div className="banner">
        <ReactSwipe className="carousel"
            swipeOptions={opt}
        >
          {list}
        </ReactSwipe>
        <div className="banner__container">
          {containerList}
        </div>
          </div>
    )
  }
}
Banner.propTypes = {
  banners: PropTypes.array
};
export default Banner