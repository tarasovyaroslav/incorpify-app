import Button from 'components/atomic/atoms/Button';
import Input from 'components/atomic/atoms/Input';
import InputPassword from 'components/atomic/molecules/InputPassword';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  StyledCard,
  StyledContainer,
  StyledForm,
  StyledLogo,
} from './styles';

const LoginPage = () => {
  let navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledCard>
        <StyledLogo>Incorpify</StyledLogo>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem('user', 'true');
            navigate('/', { replace: true });
          }}
        >
          <Input placeholder="Email" type="email" />
          <InputPassword placeholder="Password" />
          <Button
            borderless
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('/forgot-password', { replace: true });
            }}
          >
            Forgot your password?
          </Button>
          <Button primary type="submit">
            Login
          </Button>
        </StyledForm>
      </StyledCard>
    </StyledContainer>
  );
};

export default LoginPage;
