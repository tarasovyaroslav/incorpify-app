import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import Icon from 'components/atomic/atoms/Icon';
import { Container, HideButton, StyledInput } from './styles';

const InputPassword = ({
  maxwidth,
  minwidth,
  placeholder,
  required,
  value,
  handler,
  refProp,
  ...otherProps
}) => {
  const [isShow, setIsShow] = useState(false);
  const themeContext = useTheme();

  return (
    <Container maxwidth={maxwidth} minwidth={minwidth}>
      <StyledInput
        type={isShow ? 'text' : 'password'}
        placeholder={placeholder}
        required={required}
        // value={value}
        // onChange={(e) => handler(e.target.value)}
        ref={refProp}
        {...otherProps}
      />

      <HideButton
        onClick={(e) => {
          e.preventDefault();
          setIsShow(!isShow);
        }}
      >
        {isShow ? (
          <Icon
            icon="password:hide"
            style={{ color: themeContext.colors['cl-text-light'] }}
          />
        ) : (
          <Icon
            icon="password:show"
            style={{ color: themeContext.colors['cl-text-light'] }}
          />
        )}
      </HideButton>
    </Container>
  );
};

export default InputPassword;
