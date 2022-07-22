import React from 'react';
import styled from 'styled-components';

import CompanyInfo from 'components/Main/Content/CompanyInfo';
import Card from 'common/Card';

const ContentContainer = styled.div`
  display: flex;
  /* box-sizing: border-box; */
  width: 100%;
  gap: 30px;
`;

const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  height: 300px;
`;

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #dbe4f0;
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
`;

const CardContent = styled.div`
  padding: 20px;
  overflow-y: scroll;
  flex-grow: 1;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CardItem = styled.li`
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
`;

const CardContainer = ({ title }) => {
  return (
    <CardStyled>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <CardList>
          <CardItem>
            {
              'Qui ea mollit eu commodo aliquip excepteur pariatur labore occaecat tempor.'
            }
          </CardItem>
          <CardItem>{Date(Date.now())}</CardItem>
          <CardItem>{'Some data'}</CardItem>
          <CardItem>
            {'Veniam nisi minim pariatur voluptate.'}
          </CardItem>
          <CardItem>{Date(Date.now())}</CardItem>
        </CardList>
      </CardContent>
    </CardStyled>
  );
};

const RequiredActions = styled(CardContainer)`
  /* flex-grow: 1; */
`;
const ImportantDates = styled(CardContainer)``;
const ComplianceCalendar = styled(CardContainer)`
  flex-grow: 1;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const RightSide = styled.div`
  flex-grow: 0;
  width: 300px;
`;

const ActionRequired = () => {
  return (
    <>
      <CompanyInfo />
      <ContentContainer>
        <LeftSide>
          <RequiredActions title="Required Actions" />
          <ComplianceCalendar title="Compliance Calendar" />
        </LeftSide>
        <RightSide>
          <ImportantDates title="Important Dates" />
        </RightSide>
      </ContentContainer>
    </>
  );
};

export default ActionRequired;
