import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};

    ${({ minwidth, maxwidth }) => css`
      min-width: ${minwidth || 'auto'};
      max-width: ${maxwidth || 'none'};
      color: ${theme.colors['cl-text-dark']};
      height: 44px;
      border: 1px solid #bdc6da;
      border-radius: 8px;
      padding: 9px 20px;
      outline: none;
    `}

    &::placeholder {
      color: ${theme.colors['cl-text-light']};
    }
  `}
`;

export default StyledInput;
