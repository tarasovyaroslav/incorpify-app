import SettingsNav from 'components/Main/Content/SettingsNav';
import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 658px;

  gap: 19px;
`;

const Billing = () => {
  return (
    <>
      <SettingsNav />
      <ContentContainer></ContentContainer>
    </>
  );
};

export default Billing;
