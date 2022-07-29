import SelectReact from 'react-select';
import styled, { css } from 'styled-components';

const SelectStyled = styled(SelectReact)`
  height: 44px;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};
  `}

  ${({ width, height, minwidth, maxwidth }) => css`
    height: ${height || 'auto'};
    width: ${width || 'auto'};
    min-width: ${minwidth || 'auto'};
    max-width: ${maxwidth || 'none'};
  `}

  .react-select__control {
    cursor: pointer;
    border-radius: 8px;
    outline: none;
    /* border: 1px solid; */
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors['cl-select-bg']};
    transition: border-color 0.1s;
    &:hover {
      /* border: 1px solid #dbe4f0;  */
      border-color: ${({ theme }) =>
        theme.colors['cl-select-border']};
    }
  }
  .react-select__single-value {
    color: ${({ theme }) => theme.colors['cl-text-light']};
  }
  .react-select__menu {
    background-color: #f2f5fb;
  }
  .react-select__option {
    background-color: #f2f5fb;
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      background-color: #d8e3fa;
    }
  }
  .react-select__placeholder {
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
  }
`;

export { SelectStyled };
