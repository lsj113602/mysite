import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components';

import {
  change
} from '../CityPage/store/action';
import {
  addCount
} from '../HomePage/store/action';
import './index.scss';
const HomeWrapper = styled.div`
  height: 200px;
  .city {
    width: 200px;
    height: 100px;
    border: 1px solid red;
  }
`;


class HomePage extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
  }
  componentDidMount() {
    this.props.changeCityActions({cityName: 'changsan'})
    this.props.addCountActions(100)
  }
  render() {
    console.log('render');
    const cityName = this.props.cityInfo.cityName;
    const userinfo = this.props.userinfo;
    return (
      <HomeWrapper>
        <h2>
          登陆页
        </h2>
        <div className="sss">
          您当前的城市为：{cityName}
          <div className="sss__dd">1111
          </div>
        </div>
        <div>
          你好：{userinfo.get('name')}
        </div>
        <div >
          年龄：{userinfo.get('age')}
        </div>
      </HomeWrapper>
    )
  }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  console.log('mapStateToProps')
  return {
    cityInfo: state.cityInfo,
    userinfo: state.userInfo //state.get('name')
  }
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps')
  return {
    changeCityActions: bindActionCreators(change, dispatch),
    addCountActions: bindActionCreators(addCount, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)