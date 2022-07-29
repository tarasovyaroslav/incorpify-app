import styled, { css } from 'styled-components';

import colors from 'components/Theme/colors';

const StyledCard = styled.div`
  display: flex;
  /* align-items: center; */
  background-color: white;
  border: 1px solid #dbe4f0;
  border-radius: 8px;
  width: 252px;
  height: 96px;
  align-items: center;
  padding: 26px 20px;
  gap: 12px;

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
