import React from 'react';
import styled from 'styled-components';

import IconRounded from 'common/IconRounded/IconRounded';
import Card from 'common/Card';

const Container = styled(Card)`
  /* flex-direction: row; */
  gap: 12px;
  padding: 21px;
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
  color: ${({ textColor }) => textColor || '#25396F'};
  font-size: 1.25rem;
`;

const RightItem = ({ icon, title, value, iconColor, textColor }) => {
  return (
    <Container>
      <IconRounded
        icon={icon}
        color={iconColor}
        size="44px"
        padding="10px"
      />
      <RightItemContent>
        <RightItemTitle>{title}</RightItemTitle>
        <RightItemValue color={textColor}>{value}</RightItemValue>
      </RightItemContent>
    </Container>
  );
};

export default RightItem;
