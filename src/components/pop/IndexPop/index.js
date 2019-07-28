import React from 'react';
import './index.scss';
import { commonPath } from '../../../config/path';


class IndexPop extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
    this.state = {
      toggle: false,
      index: 0,
      cur: 0, // 选中的tab
      selectDetail: 999, // 选中的二级tab
      detailTabs: [],
      dataList: [
        {
          title: '家居空间',
          titleImg: `${commonPath.IMG_CND_URL}index/nav01.png`,
          backgroundImg: `${commonPath.IMG_CND_URL}index/bck01.jpg`,
          itemList: [
            {
              item: '一站式<br/>解决方案',
              linkList: [
                {
                  text: '客厅',
                  linkUrl: ''
                },
                {
                  text: '卧室',
                  linkUrl: ''
                },
                {
                  text: '餐厅',
                  linkUrl: ''
                },
                {
                  text: '厨房',
                  linkUrl: ''
                },
                {
                  text: '卫生间',
                  linkUrl: ''
                },
                {
                  text: '儿童房',
                  linkUrl: ''
                }
              ]
            },
            {
              item: '家居业务<br/>直达',
              linkList: [
                {
                  text: '家具灯具',
                  linkUrl: ''
                },
                {
                  text: '艺术开关',
                  linkUrl: ''
                },
                {
                  text: '集成整装',
                  linkUrl: ''
                }
              ]
            }
          ]
        },
        {
          title: '商用照明',
          titleImg: `${commonPath.IMG_CND_URL}index/nav02.png`,
          backgroundImg: `${commonPath.IMG_CND_URL}index/bck02.jpg`,
          itemList: [
            {
              item: '专业<br/>照明能力',
              linkUrl: '',
              linkList: [
                {
                  text: '专属定制',
                  linkUrl: ''
                },
                {
                  text: '商用照明设计',
                  linkUrl: ''
                }
              ]
            },
            {
              item: '行业<br/>案例',
              linkUrl: '',
              linkList: [
                {
                  text: '办公行业',
                  linkUrl: ''
                },
                {
                  text: '工业行业',
                  linkUrl: ''
                }
              ]
            }
          ]
        },
        {
          title: '产品中心',
          titleImg: `${commonPath.IMG_CND_URL}index/nav03.png`,
          backgroundImg: `${commonPath.IMG_CND_URL}index/bck03.jpg`,
          itemList: [
            {
              item: '家具<br/>产品',
              linkUrl: '',
              linkList: [
                {
                  text: '家具灯具',
                  linkUrl: ''
                },
                {
                  text: '家居光源',
                  linkUrl: ''
                }
              ]
            },
            {
              item: '商业照明<br/>产品',
              linkUrl: '',
              linkList: [
                {
                  text: '灯带',
                  linkUrl: ''
                },
                {
                  text: '灯条',
                  linkUrl: ''
                }
              ]
            }
          ]
        },
        {
          title: '服务中心',
          titleImg: `${commonPath.IMG_CND_URL}index/nav04.png`,
          backgroundImg: `${commonPath.IMG_CND_URL}index/bck04.jpg`,
          itemList: [
            {
              item: '客户<br/>服务',
              linkUrl: '',
              linkList: [
                {
                  text: '售后服务',
                  linkUrl: ''
                },
                {
                  text: '技术支持',
                  linkUrl: ''
                }
              ]
            },
            {
              item: '联系<br/>我们',
              linkUrl: '',
              linkList: [
              ]
            }
          ]
        },
        {
          title: '关于我们',
          titleImg: `${commonPath.IMG_CND_URL}index/nav05.png`,
          backgroundImg: `${commonPath.IMG_CND_URL}index/bck05.jpg`,
          itemList: [
            {
              item: '企业<br/>介绍',
              linkUrl: '',
              linkList: [
                {
                  text: '企业介绍',
                  linkUrl: ''
                },
                {
                  text: '荣誉历程',
                  linkUrl: ''
                }
              ]
            },
            {
              item: '新闻<br/>活动',
              linkUrl: '',
              linkList: [
                {
                  text: '促销活动',
                  linkUrl: ''
                }
              ]
            }
          ]
        }
      ]
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  changeNav = (idx) => {
    this.setState({
      cur: idx,
      selectDetail: 999,
      detailTabs: []
    });
  }
  loadDetailTab = (data) => {
    return data;
  }
  selectDetailTab = (selectDetail, data) => {
    if (!data) {
      return
    }
    if (data.linkUrl) {
      console.log('我要跳转了');
    } else {
      this.setState({
        selectDetail,
        detailTabs: data.linkList
      })
    }

  }
  loadCssFunc = (backgroundImg) => {
    return {
      background: 'url('+backgroundImg+') no-repeat center'
    }
  }
  render() {
    const arr = this.state.dataList.map((item, index) => (
      <div className={this.state.cur === index ? 'pop__nav pop__nav--select':'pop__nav'}
          key={index}
          style={this.state.cur === index ? this.loadCssFunc(item.backgroundImg) : {}}
      >
        <div className={this.state.cur === index ? 'pop__title pop__title--select':'pop__title'}
            onClick={()=>{this.changeNav(index)}}
        >
          <img className={this.state.cur === index ? 'pop__title__img pop__title__img--select':'pop__title__img'}
              src={item.titleImg}
          />
          {item.title}
        </div>
        <div className={this.state.cur === index ? 'pop__detail pop__detail--select' : 'pop__detail'}>
          {item.itemList.map((it, i_index) => (
            <div className={this.state.selectDetail === i_index ? 'pop__detail__item pop__detail__item--select' : 'pop__detail__item'}
                dangerouslySetInnerHTML={{__html: it.item}}
                key={i_index}
                onClick={()=>{this.selectDetailTab(i_index, it)}}
            >
            </div>
          ))}
        </div>
        <div className="pop__detail__tabs"
            style={{display: (this.state.detailTabs.length > 0 && this.state.cur === index) ? 'block' : 'none'}}
        >
          {this.state.detailTabs.map((item, index)=>(
            <div className="pop__detail__tab"
                key={index}
            >{item.text}</div>
          ))}
        </div>
      </div>
    ));
    return (
      <div className="pop">
        {arr}
      </div>
    )
  }
}
export default IndexPop