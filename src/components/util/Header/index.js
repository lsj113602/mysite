import React from 'react';
import './index.scss';
import IndexPop from '../../pop/IndexPop';
import { commonPath } from '../../../config/path';
import { withRouter } from 'react-router-dom';



class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggle: false,
      currentUrl: ''
    };
  }
  componentDidMount() {
    this.setState({currentUrl: this.props.location&&this.props.location.pathname})
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  loadDetailTab = (data) => {
    return data;
  }
  comeBack = () => {
    this.props.history.goBack();
    console.log(this.props.location.pathname);
  }
  render() {
    const language = <div className="header__language">Language</div>
    return (
      <div>
        {this.state.toggle?<IndexPop />:''}
        <div className="header">
          <div className="header__wrapper">
            <img className="header__back-btn"
                onClick={()=> {this.comeBack()}}
                src={`${commonPath.IMG_CND_URL}icon/icon_return.png`}
                style={{display: (!this.state.toggle && this.state.currentUrl!=='/') ? 'block' : 'none'}}
            />
            {this.state.toggle ? language : '晨曦极光'}
            <div className={this.state.toggle ? 'header__switch header__switch--cur' : 'header__switch'}
                onClick={this.toggleChange}
            >
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
              <span className={this.state.toggle ? 'header__span header__cur' : 'header__span'}></span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default withRouter(Header)