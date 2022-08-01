import React from 'react';
import { useTheme } from 'styled-components';

import Header from 'components/atomic/organisms/Header';
import Sidebar from 'components/atomic/organisms/Sidebar';

import {
  Container,
  ContentContainer,
  MainContainer,
  TitleContainer,
  Title,
  Subtitle,
} from 'components/atomic/templates/Page/styles';

import {
  footeritems,
  navitems,
} from 'components/atomic/organisms/Sidebar/menuItems';

const ServicesPage = () => {
  const themeContext = useTheme();
  return (
    <Container>
      <Sidebar navitems={navitems} footeritems={footeritems} />
      <ContentContainer>
        <Header />
        <MainContainer>
          <TitleContainer>
            <Title>Company Name</Title>
            <Subtitle>Business Type: LLC</Subtitle>
          </TitleContainer>
          {/*  */}
          Services
          {/*  */}
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

export default ServicesPage;
