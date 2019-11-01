import axios from 'axios';
import { fromJS } from 'immutable';

const interceptRequest = () => {
  const pending = []; // 数组用于存储正在请求的

  // 请求拦截
  axios.interceptors.request.use((request) => {
    pending.forEach((d) => { // eslint-disable-line
      if (request && fromJS(request).equals(fromJS(d))) {
        console.log('******重复请求*****');
        return null;
      }
    });
    pending.push(request);
    return request;
  });

  // 响应拦截
  axios.interceptors.response.use((response) => {
    pending.forEach((d, i) => {
      if (response && response.config && fromJS(response.config).equals(fromJS(d))) {
        // console.log('删除数组中完成的请求');
        pending.splice(i, 1);
      }
    });
    return response;
  });
};

export default interceptRequest;
