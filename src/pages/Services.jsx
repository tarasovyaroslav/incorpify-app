import { ReactComponent as IconTrademark } from 'components/Main/Content/Services/assets/trademark.svg';
import { ReactComponent as IconAgent } from 'components/Main/Content/Services/assets/agent.svg';
import { ReactComponent as IconMerchant } from 'components/Main/Content/Services/assets/merchant.svg';
import { ReactComponent as IconBookkeeping } from 'components/Main/Content/Services/assets/bookkeeping.svg';

import React from 'react';
import styled from 'styled-components';

import CompanyInfo from 'components/Main/Content/CompanyInfo';
import Card from 'features/Card';
import IconRounded from 'features/IconRounded/IconRounded';

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
`;

const Title = styled.div`
  color: #25396f;
  font-size: 1rem;
  font-weight: 500;
`;

const CardStyled = styled(Card)`
  flex-direction: column;
  gap: 18px;
  width: 252px;
  height: 204px;
  /* justify-content: space-between; */

  padding: 20px;
`;

const ServiceCard = ({ title, icon, color }) => {
  return (
    <CardStyled>
      <Title>{title}</Title>
      <IconRounded
        icon={icon}
        color={color}
        size="110px"
        padding="25px"
      />
    </CardStyled>
  );
};

const Services = () => {
  return (
    <>
      <CompanyInfo />
      <ContentContainer>
        <ServiceCard
          icon={<IconTrademark />}
          title="Trademark"
          color="#07CEA4"
        />
        <ServiceCard
          icon={<IconAgent />}
          title="Registered Agent"
          color="#FC782C"
        />
        <ServiceCard
          icon={<IconMerchant />}
          title="Merchant Account"
          color="#9B54E1"
        />
        <ServiceCard
          icon={<IconBookkeeping />}
          title="Account & Bookkeeping"
          color="#FE4A8B"
        />
      </ContentContainer>
    </>
  );
};

export default Services;
