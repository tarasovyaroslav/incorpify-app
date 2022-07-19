import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import Content from '../components/Content';

import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
  display: flex;
  width: 100%;
  /* flex-grow: 1; */
  /* height: 100%; */
  min-height: 768px;
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
