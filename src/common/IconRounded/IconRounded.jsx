import React from 'react';
import styled from 'styled-components';

function hexToRgba(hexColor, opacity) {
  return `rgba(
    ${parseInt(hexColor.substring(1, 3), 16)}, 
    ${parseInt(hexColor.substring(3, 5), 16)}, 
    ${parseInt(hexColor.substring(5, 7), 16)}, 
    ${opacity})`;
}

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) =>
    color ? hexToRgba(color, 0.1) : 'transparent'};
  color: ${({ color }) => color || 'inherit'};
  border-radius: 50%;
  overflow: visible;
  /* padding: 10px; */
  width: ${({ size, width }) => size || width || '32px'};
  height: ${({ size, height }) => size || height || '32px'};
  padding: ${({ padding }) => padding || '0px'};

  transition: all 0.2s;

  svg {
    width: inherit;
    height: inherit;
  }

  &:hover {
    background-color: ${({ color }) =>
      color ? hexToRgba(color, 0.2) : 'transparent'};
    transform: scale(1.1);
  }
`;

const IconRounded = ({ icon, ...otherProps }) => {
  return <IconContainer {...otherProps}>{icon}</IconContainer>;
};

export default IconRounded;
