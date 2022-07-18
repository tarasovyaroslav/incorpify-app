import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background-color: #07cea4;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 8px;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

const Button = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

export default Button;
