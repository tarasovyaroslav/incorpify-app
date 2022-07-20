import React from 'react';
import styled from 'styled-components';

import Button from 'features/Button';

import CompanyInfo from 'components/Main/Content/CompanyInfo';
import InfoItem from 'components/Main/Content/Profile/InfoItem';
import ChangeInfo from 'components/Main/Content/Profile/ChangeInfo';
import RightItem from 'components/Main/Content/Profile/RightItem';

import { ReactComponent as StatusIcon } from 'components/Main/Content/Profile/assets/status.svg';
import { ReactComponent as DateIcon } from 'components/Main/Content/Profile/assets/date.svg';
import { ReactComponent as OrderIcon } from 'components/Main/Content/Profile/assets/order.svg';
import Card from 'features/Card';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dbe4f0;
  border-radius: 8px;
  padding: 21px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 20px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
  justify-content: space-between;
`;

const DissolveBusiness = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  height: 136px;
  padding: 20px;
  color: #25396f;
`;

const DissolveButton = styled(Button)`
  background-color: #07cea4;
  color: white;
`;

const infoItems = [
  { id: 1, title: 'Business Name', value: 'Business Name' },
  { id: 2, title: 'DBA', value: 'DBA' },
  { id: 3, title: 'Owner', value: 'Owner' },
  { id: 4, title: 'Physical Address', value: 'Physical Address' },
  { id: 5, title: 'Type of Business', value: 'Type of Business' },
  { id: 6, title: '# of Members', value: '# of Members' },
  { id: 7, title: 'Tax Classification', value: 'Tax Classification' },
];

const Profile = () => {
  return (
    <>
      <CompanyInfo />

      <ContentContainer>
        <LeftSide>
          <Info>
            {infoItems.map(({ id, title, value }) => (
              <InfoItem key={id} title={title} value={value} />
            ))}
          </Info>
          <ChangeInfo />
        </LeftSide>

        <RightSide>
          <RightItem
            icon={<StatusIcon />}
            title="Status"
            value="Active"
            iconColor="#07CEA4"
            textColor="#07CEA4"
          />

          <RightItem
            icon={<DateIcon />}
            title="Date Created"
            value="12/16/2021"
            iconColor="#FC782C"
          />

          <RightItem
            icon={<OrderIcon />}
            title="Order"
            value="12/16/2021"
            iconColor="#9B54E1"
          />

          <DissolveBusiness>
            Need to Close Business?
            <DissolveButton>Dissolve Business</DissolveButton>
          </DissolveBusiness>
        </RightSide>
      </ContentContainer>
    </>
  );
};

export default Profile;
