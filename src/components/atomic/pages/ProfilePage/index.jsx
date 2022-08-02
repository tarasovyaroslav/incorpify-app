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
        <Header
          options={[
            { label: '123', value: '123' },
            { label: '123123', value: '123123' },
          ]}
        />
        <MainContainer>
          <TitleContainer>
            <Title>Company Name</Title>
            <Subtitle>Business Type: LLC</Subtitle>
          </TitleContainer>

          {/*  */}
          <ProfileContainer>
            <CompanyInfoContainer>
              <CompanyItemsList>
                {infoItems.map(({ id, title, value }) => (
                  <CompanyInfoItem
                    key={id}
                    title={title}
                    value={value}
                  />
                ))}
              </CompanyItemsList>
              <ChangeInfo>
                Need to make changes to this Information?
                <Button outlined minwidth="200px">
                  File an amendment
                </Button>
              </ChangeInfo>
            </CompanyInfoContainer>
            <SystemInfoContainer>
              <SystemInfoCard>
                <Icon
                  icon="profile:status"
                  color={themeContext.colors['cl-item1']}
                  padding="10px"
                  size="44px"
                  rounded
                />
                <SystemInfoContent>
                  <CardTitle>Status</CardTitle>
                  <StatusValue active>Active</StatusValue>
                </SystemInfoContent>
              </SystemInfoCard>

              <SystemInfoCard>
                <Icon
                  icon="profile:date"
                  color={themeContext.colors['cl-item2']}
                  padding="10px"
                  size="44px"
                  rounded
                />
                <SystemInfoContent>
                  <CardTitle>Date Created</CardTitle>
                  <SystemInfoValue>12/16/2021</SystemInfoValue>
                </SystemInfoContent>
              </SystemInfoCard>

              <SystemInfoCard>
                <Icon
                  icon="profile:order"
                  color={themeContext.colors['cl-item3']}
                  padding="10px"
                  size="44px"
                  rounded
                />
                <SystemInfoContent>
                  <CardTitle>Order #</CardTitle>
                  <SystemInfoValue>#273241</SystemInfoValue>
                </SystemInfoContent>
              </SystemInfoCard>
              <DissolveBusiness>
                Need to Close Business?{' '}
                <Button primary minwidth="180px">
                  Dissolve Business
                </Button>
              </DissolveBusiness>
            </SystemInfoContainer>
          </ProfileContainer>
          {/*  */}
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

export default ProfilePage;
