import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  font-family: inherit;
  font-weight: 500;
  font-size: 1rem;
`;

const Prop = styled.div`
  min-width: 170px;
  text-align: right;
  margin-right: 40px;
  color: #7c8db5;
`;
const Value = styled.div`
  flex-grow: 1;
  color: #25396f;
  font-weight: 400;
`;

const InfoItem = ({ title, value }) => {
  return (
    <ItemContainer>
      <Prop>{title}:</Prop>
      <Value>{value}</Value>
    </ItemContainer>
  );
};

export default InfoItem;
