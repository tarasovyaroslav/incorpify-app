import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 80px;

  /* box-sizing: border-box; */
  /* padding: 8px; */
  /* padding-left: 30px; */
`;

const Footer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Footer;
