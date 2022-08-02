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

import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';
import CompanyInfoItem from 'components/atomic/templates/Profile/CompanyInfoItem';

import {
  ProfileContainer,
  CompanyInfoContainer,
  SystemInfoContainer,
  CompanyItemsList,
  ChangeInfo,
  DissolveBusiness,
  CardTitle,
  SystemInfoCard,
  SystemInfoContent,
  SystemInfoValue,
  StatusValue,
} from 'components/atomic/templates/Profile/styles';

import { infoItems } from 'components/atomic/templates/Profile/infoItems';

import {
  footeritems,
  navitems,
} from 'components/atomic/organisms/Sidebar/menuItems';

const ProfilePage = () => {
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
          Documents
          {/*  */}
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

export default ProfilePage;
