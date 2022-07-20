import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from 'components/Sidebar/Sidebar';
import Main from 'components/Main/Main';
import Header from 'components/Main/Header/Header';
import Content from 'components/Main/Content/Content';

const Container = styled.div`
  display: flex;
  /* justify-contens: center; */
  /* max-width: 1440px; */
  width: 100%;
  /* flex-grow: 1; */
  /* height: 100%; */
  /* min-height: 768px; */
  min-height: 667px;
  font-family: 'Poppins', sans-serif;
`;

function App() {
  const { pathname } = useLocation();
  const currentPage = pathname.slice(1).split('/')[0];
  return (
    <Container>
      <Sidebar page={currentPage} />
      <Main>
        <Header />
        <Content />
      </Main>
    </Container>
  );
}

export default App;
