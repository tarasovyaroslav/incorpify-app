import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/atomic/atoms/Button';
import Input from 'components/atomic/atoms/Input';

import {
  StyledCard,
  StyledContainer,
  StyledForm,
  StyledLogo,
} from './styles';

const ForgorPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledCard>
        <StyledLogo>Incorpify</StyledLogo>
        <StyledForm>
          <span>
            Forgot your password? <br />
            Enter your e-mail below for us to send you a reset code
          </span>
          <Input placeholder="Email" type="email" />

          <Button
            borderless
            onClick={(e) => {
              e.preventDefault();
              navigate('/login', { replace: true });
            }}
          >
            Log In
          </Button>
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Reset
          </Button>
        </StyledForm>
      </StyledCard>
    </StyledContainer>
  );
};

export default ForgorPasswordPage;
