import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  height: 44px;
  border-radius: 8px;
  outline: none;
  border: none;
  text-align: center;
  padding: 9px 16px;
  cursor: pointer;

  ${({ theme, width }) => css`
    width: ${width || 'auto'};
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}

  transition: all 0.2s;
  &:hover {
    transform: scale(1.03);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: #eeeeee9c;
      color: #999;
      border: none;
      cursor: not-allowed;
    `}

  ${({ theme, disabled, outlined }) =>
    outlined &&
    !disabled &&
    css`
      background-color: transparent;
      color: ${theme.colors['cl-regular-button-color']};
      border: 1px solid ${theme.colors['cl-regular-button-color']};
    `}

    ${({ theme, primary, disabled }) =>
    primary &&
    !disabled &&
    css`
      color: ${theme.colors['cl-active-button-text']};
      background-color: ${theme.colors['cl-active-button-bg']};
    `}

    ${({ theme, borderless, disabled }) =>
    borderless &&
    !disabled &&
    css`
      color: ${theme.colors['cl-regular-button-color']};
      background-color: transparent;
      &:hover {
        background-color: #00000010;
      }
    `}
`;

export default StyledButton;
