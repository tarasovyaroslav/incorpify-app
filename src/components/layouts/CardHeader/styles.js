import styled, { css } from 'styled-components';

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  box-sizing: border-box;
  border-bottom: 1px solid #dbe4f0;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors['cl-text-light']};
  `}

  width: 100%;
  height: 66px;
  padding: 20px 30px;
`;

const StyledCardContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
  padding: 20px 30px;
`;

export { StyledCardHeader, StyledCardContent };
