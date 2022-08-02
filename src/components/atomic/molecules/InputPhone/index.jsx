import React from 'react';
import { StyledInput } from './styles';

const InputPhone = ({ ...otherProps }) => {
  const mask = '+99 (999) 999 99 99';
  return (
    <StyledInput
      {...otherProps}
      // mask={pattern}
      // mask={'999 - 999 - 999'}
      mask={mask}
      maskPlaceholder="_"
      // alwaysShowMask={true}
      // value={text}
      // required
    />
  );
};

export default InputPhone;
