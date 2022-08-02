import styled, { css } from 'styled-components';

import colors from 'components/Theme/colors';

const StyledCard = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  padding: 26px 20px;

  ${({ theme }) => css`
    background-color: ${theme.colors['cl-card-bg']};
    border: 1px solid ${theme.colors['cl-card-border']};
  `}
  gap: 12px;

  ${({ width, height }) => css`
    width: ${width || 'auto'};
    height: ${height || 'auto'};
  `}

  .card-data {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-title {
    color: ${colors['cl-text-light']};
  }

  .card-value {
    color: ${colors['cl-text-dark']};
    &:first-child {
      color: ${colors['cl-active']};
      background-color: red;
    }
  }
`;

export default StyledCard;
