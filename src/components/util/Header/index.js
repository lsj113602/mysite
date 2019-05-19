import React from 'react';
import './index.scss';
import IndexPop from '../../pop/IndexPop';


class Header extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
    this.state = {
      toggle: false
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  loadDetailTab = (data) => {
    return data;
  }
  render() {
    const language = <div className="header__language">Language</div>
    return (
      <div>
        {this.state.toggle?<IndexPop />:''}
        <div className="header">
          <div className="header__wrapper">
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
export default Header