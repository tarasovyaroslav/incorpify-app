import { ReactComponent as Icon1 } from '../assets/articles.svg';
import { ReactComponent as Icon2 } from '../assets/statement.svg';
import { ReactComponent as Icon3 } from '../assets/filing.svg';
import { ReactComponent as Icon4 } from '../assets/annual.svg';
import { ReactComponent as Icon5 } from '../assets/ein.svg';

import React from 'react';
import styled from 'styled-components';

import CompanyInfo from '../components/CompanyInfo';
import Button from '../components/Button';

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

const DownloadButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: #0181b6;
  border: 1px solid #0181b6;
  background-color: transparent;
  min-width: 180px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  border-radius: 50%;
  overflow: visible;
  /* padding: 10px; */
  width: 110px;
  height: 110px;
`;

const CardStyled = styled.div`
  box-sizing: border-box;
  /* gap: 12px; */
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  border: 1px solid #dbe4f0;

  display: flex;
  flex-direction: column;
  /* flex-grow: 0; */
  width: 252px;
  height: 252px;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({ title, icon, bgcolor }) => {
  return (
    <CardStyled>
      <Title>{title}</Title>
      <IconContainer bgcolor={bgcolor}>{icon}</IconContainer>
      <DownloadButton>Download PDF</DownloadButton>
    </CardStyled>
  );
};

const Documents = () => {
  return (
    <>
      <CompanyInfo />
      <ContentContainer>
        <Card
          icon={<Icon1 />}
          title="Articles of Incorporation"
          bgcolor="#E6FAF6"
        />
        <Card
          icon={<Icon2 />}
          title="Statement of Organizer"
          bgcolor="#FFF1EA"
        />
        <Card
          icon={<Icon3 />}
          title="Filing Receipt"
          bgcolor="#F5EEFC"
        />
        <Card
          icon={<Icon4 />}
          title="Annual Report"
          bgcolor="#FFEDF3"
        />
        <Card icon={<Icon5 />} title="EIN" bgcolor="#EEEDFC" />
      </ContentContainer>
    </>
  );
};

export default Documents;
