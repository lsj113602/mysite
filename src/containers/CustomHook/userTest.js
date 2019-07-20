import { useState } from 'react';

const userTest = () => {
  const [payload, setPayload] = useState({ data: '', loading: false, error: false });
  const handleCountry = async (countryIds) => {
    console.log('before-->setPayload', countryIds);
    setPayload({ data: countryIds, loading: true, error: false });
    console.log('after-->setPayload', countryIds);
  };
  return {
    countryData: payload,
    handleCountry
  };
};

export default userTest;
