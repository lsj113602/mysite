import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class withData extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    payload: PropTypes.object,
    children: PropTypes.func,
    delayedRequest: PropTypes.number
  }

  constructor(props) {
    super(props);
    const { delayedRequest, children, ...restProps } = props;
    if (delayedRequest) {
      this.requestTimeOffset = setTimeout(() => {
        this.fetchData(restProps);
      }, delayedRequest * 1000);
    } else {
      this.fetchData(restProps);
    }
  }

  state = { data: false }

  componentWillUnmount() {
    // 有可能没等请求回来就卸载了页面，此时this.source = undefined
    if (this.source) {
      this.source.cancel('Operation canceled by comp unmounting.');
    }
    clearTimeout(this.requestTimeOffset);
  }

  fetchData = async ({ url, payload, method, ...otherProps }) => {
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    try {
      const resp = await axios({
        method,
        url,
        data: payload,
        ...otherProps,
        cancelToken: this.source.token
      });
      if (resp.status && resp.status === 200) {
        const resData = resp.data;
        // console.log(url, payload, method, resData);
        this.setState({ data: resData });
      }
    } catch (e) {
      if (axios.isCancel(e)) {
        console.log('(*^ ^*)Request canceled', e.message);
      } else {
        this.setState({ data: false });
      }
    }
  }

  render() {
    return this.props.children(this.state.data);
  }
}
