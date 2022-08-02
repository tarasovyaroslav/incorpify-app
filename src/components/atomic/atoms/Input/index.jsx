import React from 'react';

import StyledInput from './styles';

const Input = ({ children, handler, refProp, ...otherProps }) => {
  return (
    <StyledInput
      // onChange={(e) => handler(e.target.value)}
      ref={refProp}
      {...otherProps}
    />
  );
};

export default Input;
