import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  /* width: 100%; */
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
