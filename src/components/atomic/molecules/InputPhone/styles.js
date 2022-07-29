import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

const StyledInput = styled(InputMask)`
  box-sizing: border-box;
  /* width: 100%;
  height: 100%; */
  ${({ minwidth, maxwidth }) => css`
    min-width: ${minwidth || 'auto'};
    max-width: ${maxwidth || 'noneauto'};
  `}
  border: 1px solid #bdc6da;
  border-radius: 8px;
  padding: 9px 50px 9px 20px;
  outline: none;

  &::placeholder {
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors['cl-text-light']};
  }

  color: ${({ theme }) => theme.colors['cl-text-dark']};
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};
  `}
`;

export { StyledInput };
