import React from 'react';

import StyledButton from './styles';

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
