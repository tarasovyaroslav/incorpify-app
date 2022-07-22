import SettingsNav from 'components/Main/Content/SettingsNav';
import Card from 'common/Card';
import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  max-width: 910px;
  /* width: 910px; */
  gap: 19px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 66px;
  border-bottom: 1px solid #dbe4f0;
  color: #7c8db5;
  font-weight: 500;
  font-size: 1rem;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px;
  /* overflow-y: scroll; */
  flex-grow: 1;
  padding-bottom: 30px;
  /* width: */
`;

const Subscriptions = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  flex-grow: 1;
  /* border-bottom: 1px solid #dbe4f0; */
`;

const PaymentDetails = styled(Card)`
  /* width: 50%; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Invoices = styled(Card)`
  /* width: 50%; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Billing = () => {
  return (
    <>
      <SettingsNav />
      <ContentContainer>
        <Subscriptions>
          <CardHeader>Subscriptions</CardHeader>
          <CardContent>Some content</CardContent>
        </Subscriptions>
        <PaymentDetails>
          <CardHeader>Payment Details</CardHeader>
          <CardContent>Some content</CardContent>
        </PaymentDetails>
        <Invoices>
          <CardHeader>Invoices</CardHeader>
          <CardContent>Some content</CardContent>
        </Invoices>
      </ContentContainer>
    </>
  );
};

export default Billing;
