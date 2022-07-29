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
  width: ${({ size, width }) => width || size || '32px'};
  height: ${({ size, height }) => height || size || '32px'};
  svg {
    /* width: ${(props) => props.width || props.size || '32px'};
    height: ${(props) => props.height || props.size || '32px'};
    color: ${(props) => props.color || 'black'};
     */
    width: inherit;
    height: inherit;
    color: ${({ color }) => color || 'inherit'};
  }

  ${(props) =>
    props.rounded &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ color }) =>
        color ? hexToRgba(color, 0.1) : 'transparent'};
      /* color: ${({ color }) => color || 'inherit'}; */
      border-radius: 50%;
      overflow: visible;
      /* padding: 10px; */
      /* width: ${({ size, width }) => size || width || '32px'};
      height: ${({ size, height }) => size || height || '32px'}; */
      padding: ${({ padding }) => padding || '0px'};
      transition: all 0.2s;
      /* svg {
        width: 100%;
        height: 100%;
      } */
      &:hover {
        background-color: ${({ color }) =>
          color ? hexToRgba(color, 0.2) : 'transparent'};
        transform: scale(1.1);
      }
    `}
`;

export default StyledIcon;
