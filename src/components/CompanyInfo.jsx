import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.h1`
  color: #25396f;
  font-family: inherit;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2px;
  /* line-height: normal; */
`;

const BusinessType = styled.h2`
  color: #25396f;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.125rem;
  margin: 0;
  margin-bottom: 20px;
`;

const CompanyInfo = () => {
  return (
    <Container>
      <Title>Innova Labs</Title>
      <BusinessType>Business Type: {'LLC'}</BusinessType>
    </Container>
  );
};

export default CompanyInfo;
