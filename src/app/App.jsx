import React from 'react';
import styled from 'styled-components';
import Content from '../common/Content';

import Header from '../common/Header';
import Main from '../common/Main';
import Sidebar from '../common/Sidebar';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Header />
        <Content />
      </Main>
    </Container>
  );
}

export default App;
