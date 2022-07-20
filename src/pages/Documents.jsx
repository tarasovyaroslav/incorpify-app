import { ReactComponent as IconArticles } from 'components/Main/Content/Documents/assets/articles.svg';
import { ReactComponent as IconStatement } from 'components/Main/Content/Documents/assets/statement.svg';
import { ReactComponent as IconFiling } from 'components/Main/Content/Documents/assets/filing.svg';
import { ReactComponent as IconAnnual } from 'components/Main/Content/Documents/assets/annual.svg';
import { ReactComponent as IconEin } from 'components/Main/Content/Documents/assets/ein.svg';

import React from 'react';
import styled from 'styled-components';

import CompanyInfo from 'components/Main/Content/CompanyInfo';
import Button from 'features/Button';
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

const DownloadButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: #0181b6;
  border: 1px solid #0181b6;
  background-color: transparent;
  min-width: 180px;
`;

const CardStyled = styled(Card)`
  flex-direction: column;
  width: 252px;
  height: 252px;
  justify-content: space-between;

  padding: 20px;
`;

const DocumentCard = ({ title, icon, color }) => {
  return (
    <CardStyled>
      <Title>{title}</Title>
      <IconRounded
        icon={icon}
        color={color}
        size="110px"
        padding="25px"
      />
      <DownloadButton>Download PDF</DownloadButton>
    </CardStyled>
  );
};

const Documents = () => {
  return (
    <>
      <CompanyInfo />
      <ContentContainer>
        <DocumentCard
          icon={<IconArticles />}
          title="Articles of Incorporation"
          color="#07CEA4"
        />
        <DocumentCard
          icon={<IconStatement />}
          title="Statement of Organizer"
          color="#FC782C"
        />
        <DocumentCard
          icon={<IconFiling />}
          title="Filing Receipt"
          color="#9B54E1"
        />
        <DocumentCard
          icon={<IconAnnual />}
          title="Annual Report"
          color="#FE4A8B"
        />
        <DocumentCard
          icon={<IconEin />}
          title="EIN"
          color="#524FE1"
        />
      </ContentContainer>
    </>
  );
};

export default Documents;
