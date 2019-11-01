import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axiosInterceptor from '../../utils/axiosInterceptor';

import NotFoundPage from '../../pages/NotFoundPage/Loadable';
import IndexPage from '../../pages/IndexPage/Loadable';
import HomePage from '../../pages/HomePage/Loadable';
import LoginPage from '../../pages/LoginPage/Loadable';
import MainPage from '../../pages/MainPage/Loadable';
import ProductCenter from '../../pages/Product/ProductCenter/Loadable';
import productList from '../../pages/Product/ProductList/Loadable';
import productDetail from '../../pages/Product/ProductDetail/Loadable'

class App extends React.Component {
  constructor(props) {
    super(props);
    // 配置axios 拦截重复请求
    axiosInterceptor();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route component={MainPage}
              exact
              path="/"
          />
          <Route component={IndexPage}
              exact
              path="/index"
          />
          <Route component={HomePage}
              exact
              path="/home"
          />
          <Route component={LoginPage}
              exact
              path="/login"
          />
          <Route component={ProductCenter}
              exact
              path="/productCenter"
          />
          <Route component={productList}
              exact
              path="/productList"
          />
          <Route component={productDetail}
              exact
              path="/productDetail/:id"
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  cookies: PropTypes.object,
  location: PropTypes.object
};
export default App;
