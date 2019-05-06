import React from 'react';
import styled from 'styled-components';
import RequireMemberAuth from '../../components/_hoc_or_provider/RequireMemberAuth';
const HomeWrapper = styled.div`
  width: 300px;
  height: 200px;
  background: red;
`;
const HomePage = () => (
  <HomeWrapper>我是个人主页</HomeWrapper>
);

export default RequireMemberAuth(HomePage);