import React from 'react';
import styled from 'styled-components';

import Button from 'features/Button';

const AmendmentButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  color: #0181b6;
  border: 1px solid #0181b6;
  background-color: transparent;
`;

const Container = styled.div`
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
  height: 102px;
`;

const ChangeInfo = () => {
  return (
    <Container>
      Need to make changes to this Information?
      <AmendmentButton>File an amendment</AmendmentButton>
    </Container>
  );
};

export default ChangeInfo;
