import styled, { css } from 'styled-components';

import colors from 'res/colors';

const StyledButton = styled.button`
  width: ${({ width }) => width && 'auto'};
  height: 44px;
  border-radius: 8px;
  outline: none;
  border: none;
  text-align: center;
  padding: 9px 16px;
  cursor: pointer;
  font: var(--ft-regular-text);
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
    `}

  ${(props) =>
    props.outlined &&
    !props.disabled &&
    css`
      color: ${colors['cl-regular-button-color']};
      /* border: 1px solid var(--cl-regular-button-color); */
      background-color: transparent;
      border: 1px solid ${colors['cl-regular-button-color']};
    `}

    ${(props) =>
    props.primary &&
    !props.disabled &&
    css`
      color: ${colors['cl-active-button-text']};
      /* border: 1px solid var(--cl-regular-button-color); */
      background-color: ${colors['cl-active-button-bg']};
    `}

    ${(props) =>
    props.borderless &&
    !props.disabled &&
    css`
      color: ${colors['cl-regular-button-color']};
      background-color: transparent;
      &:hover {
        background-color: #00000010;
      }
    `}
`;

export default StyledButton;
