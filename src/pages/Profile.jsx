import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import CompanyInfo from '../components/CompanyInfo';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dbe4f0;
  border-radius: 8px;
  padding: 21px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
`;

const Prop = styled.div`
  min-width: 170px;
  text-align: right;
  margin-right: 40px;
  color: #7c8db5;
`;
const Value = styled.div`
  flex-grow: 1;
  color: #25396f;
  font-weight: 400;
`;

const InfoItem = ({ title, value }) => {
  return (
    <ItemContainer>
      <Prop>{title}:</Prop>
      <Value>{value}</Value>
    </ItemContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

const LeftSide = styled.div`
  /* max-width: 810px; */
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

const ChangeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #25396f;
  font-weight: 500;
  background-color: white;
  border: 1px solid #dbe4f0;
  border-radius: 8px;
  padding: 21px;
  min-width: 520px;
  height: 50px;
`;

const RightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: white;
  border: 1px solid #dbe4f0;
  border-radius: 8px;
  padding: 21px;
`;

const DissolveBusiness = styled(RightItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92px;
  color: #25396f;
`;

const DissolveButton = styled(Button)`
  background-color: #07cea4;
  color: white;
`;

const AmendmentButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: #0181b6;
  border: 1px solid #0181b6;
  background-color: transparent;
`;

const RightItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightItemTitle = styled.div`
  font-weight: 400;
  color: #7c8db5;
`;

const RightItemValue = styled.div`
  color: ${({ color }) => color || '#25396F'};
  font-size: 1.25rem;
`;

const IconStyled = styled(Icon)`
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  border-radius: 50%;
  overflow: visible;
  padding: 10px;
  width: 24px;
  height: 24px;
`;

const Profile = () => {
  return (
    <>
      <CompanyInfo />

      <ContentContainer>
        <LeftSide>
          <Info>
            <InfoItem
              title="Business Name"
              value={'Business Name'}
            ></InfoItem>
            <InfoItem title="DBA" value={'DBA'}></InfoItem>
            <InfoItem title="Owner" value={'Owner'}></InfoItem>
            <InfoItem
              title="Physical Address"
              value={'Physical Address'}
            ></InfoItem>
            <InfoItem
              title="Type of Business"
              value={'Type of Business'}
            ></InfoItem>
            <InfoItem
              title="# of Members"
              value={'# of Members'}
            ></InfoItem>
            <InfoItem
              title="Tax Classification"
              value={'Tax Classification'}
            ></InfoItem>
          </Info>
          <ChangeInfo>
            Need to make changes to this Information?
            <br />
            <AmendmentButton>File an amendment</AmendmentButton>
          </ChangeInfo>
        </LeftSide>
        <RightSide>
          <RightItem>
            <IconStyled
              icon="bi:eye"
              color="#07CEA4"
              bgcolor="#E6FAF6"
            ></IconStyled>
            <RightItemContent>
              <RightItemTitle>Status</RightItemTitle>
              <RightItemValue color="#07CEA4">Active</RightItemValue>
            </RightItemContent>
          </RightItem>
          <RightItem>
            <IconStyled
              icon="uiw:date"
              color="#FC782C"
              bgcolor="#FFF1EA"
            ></IconStyled>
            <RightItemContent>
              <RightItemTitle>Date Created</RightItemTitle>
              <RightItemValue>12/16/2021</RightItemValue>
            </RightItemContent>
          </RightItem>
          <RightItem>
            <IconStyled
              icon="bi:bag-check"
              color="#9B54E1"
              bgcolor="#F5EEFC"
            ></IconStyled>
            <RightItemContent>
              <RightItemTitle>Order</RightItemTitle>
              <RightItemValue>#273241</RightItemValue>
            </RightItemContent>
          </RightItem>
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
