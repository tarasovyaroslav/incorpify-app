import React from 'react';
import styled, { css } from 'styled-components';

const StyledInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
`;

const Title = styled.span`
  width: 148px;
  text-align: end;
  flex-grow: 0;
  ${({ theme }) => css`
    color: ${theme.colors['cl-text-light']};
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const Value = styled.span`
  display: block;
  flex-grow: 1;
  ${({ theme }) => css`
    color: ${theme.colors['cl-text-dark']};
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const CompanyInfoItem = ({ title, value }) => {
  return (
    <StyledInfoItem>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledInfoItem>
  );
};

export default CompanyInfoItem;
