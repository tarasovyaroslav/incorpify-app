import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 80px;
`;

const SidebarFooter = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SidebarFooter;
