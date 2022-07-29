import styled, { css } from 'styled-components';

import colors from 'components/Theme/colors';

const StyledButton = styled.button`
  box-sizing: border-box;
  width: ${({ width }) => width || 'auto'};
  height: 44px;
  border-radius: 8px;
  outline: none;
  border: none;
  text-align: center;
  padding: 9px 16px;
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}

  transition: all 0.2s;
  &:hover {
    transform: scale(1.03);
  }

  ${(props) =>
    props.disabled &&
    css`
      background: #eeeeee9c;
      /* border-radius: 4px; */
      color: #999;
      border: none;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.outlined &&
    !props.disabled &&
    css`
      background-color: transparent;
      color: ${props.theme.colors['cl-regular-button-color']};
      border: 1px solid
        ${props.theme.colors['cl-regular-button-color']};
    `}

    ${(props) =>
    props.primary &&
    !props.disabled &&
    css`
      color: ${props.theme.colors['cl-active-button-text']};
      background-color: ${props.theme.colors['cl-active-button-bg']};
    `}

    ${(props) =>
    props.borderless &&
    !props.disabled &&
    css`
      color: ${props.theme.colors['cl-regular-button-color']};
      background-color: transparent;
      &:hover {
        background-color: #00000010;
      }
    `}
`;

export default StyledButton;
