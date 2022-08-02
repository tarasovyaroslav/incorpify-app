import styled, { css } from 'styled-components';

function hexToRgba(hexColor, opacity) {
  return `rgba(
      ${parseInt(hexColor.substring(1, 3), 16)}, 
      ${parseInt(hexColor.substring(3, 5), 16)}, 
      ${parseInt(hexColor.substring(5, 7), 16)}, 
      ${opacity})`;
}

const StyledIcon = styled.div`
  box-sizing: border-box;

  ${({ color, size, width, height, padding }) => css`
    width: ${width || size || '32px'};
    height: ${height || size || '32px'};
    svg {
      color: ${color || 'inherit'};
      width: inherit;
      height: inherit;
    }

    ${({ rounded }) =>
      rounded &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: ${color
          ? hexToRgba(color, 0.1)
          : 'transparent'};
        overflow: visible;
        padding: ${padding || '0px'};
        transition: all 0.2s;

        &:hover {
          background-color: ${({ color }) =>
            color ? hexToRgba(color, 0.2) : 'transparent'};
          transform: scale(1.1);
        }
      `}
  `}
`;

export default StyledIcon;
