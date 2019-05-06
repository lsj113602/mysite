import React from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import LoadingMsg from '../../LoadingMsg';

export default function RequireMemberAuth(Component, reverseAuth) {
  class DecoratedComp extends React.Component {
    static propTypes = {
      cookies: PropTypes.instanceOf(Cookies).isRequired,
      history: PropTypes.object
    }
    constructor(props) {
      super(props);
      this.state = {
        memberInfo: null
      };
    }

    render() {
      let content = null;
      // reverseAuth 是指token验证通过不能进入页面，如 login，register
      if (
        (this.state.memberInfo && !reverseAuth) ||
        (reverseAuth && !this.state.memberInfo)
      ) {
        const props = { ...this.props, memberInfo: this.state.memberInfo };
        content = <Component {...props} />;
      } else if (reverseAuth) {
        // 如果在登录页已登录，则返回上一页
        this.props.history.goBack();
      } else {
        const search = window.location.search;
        const encode = encodeURIComponent(`${window.location.pathname}${search}`);
        content = (
          <LoadingMsg
              key={'authFail'}
              msg={'Loading...'}
              redirectPath={`/login?backUrl=${encode}`}
          />
        );
      }
      return content;
    }
  }
  return withRouter(withCookies(DecoratedComp));
}
