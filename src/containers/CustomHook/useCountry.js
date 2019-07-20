import { useState } from 'react';
import axios from 'axios';

import { silkPath } from 'config/path';

const useCountry = () => {
  const [payload, setPayload] = useState({ data: false, loading: false, error: false });
  const handleCountry = async (countryIds) => {
    try {
      setPayload({ data: false, loading: true, error: false });
      const res = await axios.post(silkPath.API_PRODUCT_COUNTRY, { countryIds });
      if (!res.data || res.data.code !== 'P001') {
        throw new Error('获取城市信息失败');
      }
      setPayload({
        data: res.data.countryInfos,
        loading: false,
        error: false
      });
    } catch (e) {
      setPayload({ data: false, loading: false, error: e.message });
    }
  };
  return {
    countryData: payload,
    handleCountry
  };
};

export default useCountry;
