import React from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import './index.scss';

class Video extends React.Component {
  static propTypes = {
    videoSrc: PropTypes.string,
    imgSrc: PropTypes.string,
    mobileImgSrc: PropTypes.string,
    imgPosition: PropTypes.string,
    mobileBgColor: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    isFrom: PropTypes.string
  }
  state = {
    showVideo: false,
    play: false
  }
  shouldComponentUpdate(nextProps, nextState) {
    const props = !fromJS(this.props).equals(fromJS(nextProps));
    const state = !fromJS(this.state).equals(fromJS(nextState));
    return props || state;
  }
  componentDidUpdate() {
    if (!this.state.showVideo) return;
    if (this.state.play) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }
  componentWillUnmount() {
    if (this.video) this.video.removeEventListener('pause', this.handlePause);
  }
  handlePause = () => {
    // 正常情况下点击暂停按钮之后会调用pauseHandle暂停视频
    // 当移动端全屏播放点击左上角缩小时视频会暂停，需要自己监听暂停事件并且更改play状态
    if (this.state.play) {
      this.setState({ play: false });
    }
  }
  pauseHandle = (e) => {
    e.stopPropagation();
    this.setState({ play: false });
  }
  playHandle = (e) => {
    e.stopPropagation();
    if (this.state.showVideo) {
      this.setState({ play: true });
      this.video.play();
    } else {
      // 等video标签出现后再播放
      this.setState({ showVideo: true, play: true }, () => {
        this.video.addEventListener('pause', this.handlePause);
        this.video.play();
      });
    }
  }
  render() {
    const { videoSrc, mobileImgSrc, imgPosition, mobileBgColor, isFrom } = this.props;
    return (
      <div className="video"
          isFrom={isFrom}
          mobileBgColor={mobileBgColor}
      >
        {this.state.showVideo ?
          <video loop
              ref={(n) => { this.video = n; }}
              src={videoSrc}
          >
            <track kind="captions"></track>
          </video>
          :
          <img className="img"
              imgPosition={imgPosition}
              src={mobileImgSrc}
          />
        }
        {this.state.play ?
          <button className="pause"
              onClick={this.pauseHandle}
          >
            <img alt="pause"
                src={'https://picture.tcc.cn/chimera/layout/stop.svg'}
            />
          </button>
          :
          <button className="play"
              onClick={this.playHandle}
          >
            <img alt="play"
                src={'https://picture.tcc.cn/chimera/layout/play.svg'}
            />
          </button>
        }
      </div>
    );
  }
}

export default Video;
