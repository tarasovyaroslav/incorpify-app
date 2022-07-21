import React from 'react';
import styled from 'styled-components';

import CompanyInfo from 'components/Main/Content/CompanyInfo';
import Card from 'features/Card';

const ContentContainer = styled.div`
  display: flex;
  /* box-sizing: border-box; */
  max-width: 816px;
  height: 360px;
  width: 100%;
`;

const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  height: 300px;
  min-width: 816px;
  /* gap: 12px; */
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dbe4f0;
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  height: 66px;
  padding: 20px 30px;
  gap: 18px;
`;

const HeaderItem = styled.div`
  flex-grow: 0;
  width: 115px;
  height: 100%;
  &:first-child {
    /* flex-grow: 1; */
    min-width: 600px;
  }
`;

const CardContent = styled.div`
  padding: 20px 30px;
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
  display: flex;
  gap: 18px;
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
`;

const CardItemSection = styled.div`
  flex-grow: 0;
  min-width: 115px;
  height: 100%;
  &:first-child {
    /* flex-grow: 1; */
    /* width: 100%; */
    min-width: 600px;
  }
`;

const CardContainer = () => {
  return (
    <CardStyled>
      <CardHeaderContainer>
        <HeaderItem>Subject</HeaderItem>
        <HeaderItem>Date Recived</HeaderItem>
      </CardHeaderContainer>
      <CardContent>
        <CardList>
          <CardItem>
            <CardItemSection>Subject 1</CardItemSection>
            <CardItemSection>21/12/2021</CardItemSection>
          </CardItem>
          <CardItem>
            <CardItemSection>Subject 2</CardItemSection>
            <CardItemSection>21/12/2021</CardItemSection>
          </CardItem>
          <CardItem>
            <CardItemSection>Subject 3</CardItemSection>
            <CardItemSection>21/12/2021</CardItemSection>
          </CardItem>
          <CardItem>
            <CardItemSection>Subject 4</CardItemSection>
            <CardItemSection>21/12/2021</CardItemSection>
          </CardItem>
          <CardItem>
            <CardItemSection>Subject 5</CardItemSection>
            <CardItemSection>21/12/2021</CardItemSection>
          </CardItem>
        </CardList>
      </CardContent>
    </CardStyled>
  );
};

const Mailbox = () => {
  return (
    <>
      <CompanyInfo />
      <ContentContainer>
        <CardContainer />
      </ContentContainer>
    </>
  );
};

export default Mailbox;
