import styled, { css } from 'styled-components';
import SelectReact from 'react-select';

const SelectStyled = styled(SelectReact)`
  height: 44px;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};

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
      border-color: transparent;
      background-color: ${theme.colors['cl-select-bg']};
      transition: border-color 0.1s;
      &:hover {
        border-color: ${theme.colors['cl-select-border']};
      }
    }
    .react-select__single-value {
      color: ${theme.colors['cl-text-light']};
    }
    .react-select__menu {
      background-color: #f2f5fb;
    }
    .react-select__option {
      cursor: pointer;
      background-color: ${theme.colors['cl-select-bg']};
      color: ${theme.colors['cl-text-light']};
      &:hover {
        background-color: ${theme.colors['cl-select-hover']};
      }
    }
    .react-select__placeholder {
      color: ${theme.colors['cl-text-light']};
    }
  `}
`;

export { SelectStyled };
