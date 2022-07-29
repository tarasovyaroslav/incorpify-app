import styled, { css } from 'styled-components';
import colors from 'components/Theme/colors';

const StyledInput = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};
  `}

  ${(props) => css`
    box-sizing: border-box;
    min-width: ${props.minwidth || 'auto'};
    max-width: ${props.maxwidth || 'none'};
    height: 44px;
    border: 1px solid #bdc6da;
    border-radius: 8px;
    padding: 9px 20px;
    color: ${props.theme.colors['cl-text-dark']};
    outline: none;
  `}

  &::placeholder {
    color: ${({ theme }) => theme.colors['cl-text-light']};
  }
`;

export default StyledInput;
