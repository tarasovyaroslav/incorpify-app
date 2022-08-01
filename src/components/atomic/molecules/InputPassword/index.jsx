import React, { useState } from 'react';
import Icon from 'components/atomic/atoms/Icon';

import { Container, HideButton, StyledInput } from './styles';

const InputPassword = ({ maxwidth, minwidth, placeholder }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Container maxwidth={maxwidth} minwidth={minwidth}>
      <StyledInput
        type={isShow ? 'text' : 'password'}
        placeholder={placeholder}
      />

      <HideButton
        onClick={(e) => {
          e.preventDefault();
          setIsShow(!isShow);
        }}
      >
        {isShow ? (
          <Icon icon="password:hide" style={{ color: '#7C8DB5' }} />
        ) : (
          <Icon icon="password:show" style={{ color: '#7C8DB5' }} />
        )}
      </HideButton>
    </Container>
  );
};

export default InputPassword;
