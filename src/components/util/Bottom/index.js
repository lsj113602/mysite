import React from 'react';
import './index.scss';
import { commonPath } from '../../../config/path';

import { Link } from 'react-router-dom';



class Bottom extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      select: '',
      bottomList: [
        {
          key: 'home',
          img: `${commonPath.IMG_CND_URL}icon/footer_icon1.png`,
          imgCur: `${commonPath.IMG_CND_URL}icon/footer_icon1_cur.png`,
          text: '家居空间',
          linkUrl: '/'
        },
        {
          key: 'list',
          img: `${commonPath.IMG_CND_URL}icon/footer_icon2.png`,
          imgCur: `${commonPath.IMG_CND_URL}icon/footer_icon2_cur.png`,
          text: '产品列表',
          linkUrl: '/productList'
        },
        {
          key: 'center',
          img: `${commonPath.IMG_CND_URL}icon/footer_icon3.png`,
          imgCur: `${commonPath.IMG_CND_URL}icon/footer_icon3_cur.png`,
          text: '产品中心',
          linkUrl: '/productCenter'
        },
        {
          key: 'me',
          img: `${commonPath.IMG_CND_URL}icon/footer_icon4.png`,
          imgCur: `${commonPath.IMG_CND_URL}icon/footer_icon4_cur.png`,
          text: '关于我们',
          linkUrl: '/aboutUs'
        }
      ]
    };
  }
  componentDidMount() {
    this.setState({select: this.props.cur || 'home'});
  }
  gotoLink = (item) => {
    // this.props.history.push(item.linkUrl);
    this.setState({select: item.key});
  }
  render() {
    return (
      <div className="bottom">
        {this.state.bottomList.map((item, index) => (
          <Link  className={this.state.select === item.key ? 'bottom__item bottom__item--select' : 'bottom__item'}
              key={index}
              onClick={() => {this.gotoLink(item)}}
              to={item.linkUrl}
          >
              <div className="bottom__icon">
                <img className="bottom__icon"
                    src={this.state.select === item.key ? item.imgCur : item.img}
                ></img>
              </div>
              {item.text}
            </Link>
        ))}
      </div>
    )
  }
}
export default Bottom