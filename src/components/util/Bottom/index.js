import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';



class Bottom extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      select: 999,
      bottomList: [
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon05.png',
          text: '家居空间',
          linkUrl: '/'
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon06.png',
          text: '商用照明',
          linkUrl: '/productList'
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon07.png',
          text: '产品中心',
          linkUrl: '/productCenter'
        },
        {
          img: 'http://www.opple.com.cn/web/ucan/wap/images/phone/footer_icon09.png',
          text: '客户服务',
          linkUrl: '/'
        }
      ]
    };
  }
  componentDidMount() {
  }
  gotoLink = (index, item) => {
    // this.props.history.push(item.linkUrl);
    console.log(index);
    console.log(item.linkUrl);
  }
  render() {
    return (
      <div className="bottom">
        {this.state.bottomList.map((item, index) => (
          <Link  className={this.state.select === index ? 'bottom__item bottom__item--select' : 'bottom__item'}
              key={index}
              onClick={() => {this.gotoLink(index, item)}}
              to={item.linkUrl}
          >
              <div className="bottom__icon">
                <img className="bottom__icon"
                    src={item.img}
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