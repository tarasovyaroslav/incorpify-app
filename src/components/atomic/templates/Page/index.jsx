import React from 'react';

import Header from 'components/atomic/organisms/Header';
import Sidebar from 'components/atomic/organisms/Sidebar';
import Profile from 'components/atomic/templates/Profile';

import {
  Container,
  ContentContainer,
  MainContainer,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

import {
  footeritems,
  navitems,
} from 'components/atomic/organisms/Sidebar/menuItems';

const Page = () => {
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
          <Profile />
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

export default Page;
