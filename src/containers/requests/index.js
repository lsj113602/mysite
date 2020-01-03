import axios from 'axios';
import { apiPath} from '../../config/path';


export const fetchIndexBanner = async (payload) => {
  try {
    console.log('INDEX_BANNER_LIST:', apiPath);
    const res = await axios.get(apiPath.INDEX_BANNER_LIST, { params: { ...payload } });
    if (res.data && res.data.code === 0) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const search = async (payload) => {
  try {
    const res = await axios.post(apiPath.INDEX_BANNER_LIST, payload);
    if (res) {
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
export default {};
