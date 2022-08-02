import React from 'react';
// import styled, { css, useTheme } from 'styled-components';
// import Card from 'components/layouts/Card';
import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';
import CompanyInfoItem from './CompanyInfoItem';
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
} from './styles';
import { infoItems } from './infoItems';
import { useTheme } from 'styled-components';

const Profile = () => {
  const themeContext = useTheme();
  return (
    <ProfileContainer>
      <CompanyInfoContainer>
        <CompanyItemsList>
          {infoItems.map(({ id, title, value }) => (
            <CompanyInfoItem key={id} title={title} value={value} />
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
  );
};

export default Profile;
