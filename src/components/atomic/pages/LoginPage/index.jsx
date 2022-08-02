import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Button from 'components/atomic/atoms/Button';
import Input from 'components/atomic/atoms/Input';
import InputPassword from 'components/atomic/molecules/InputPassword';

import {
  StyledCard,
  StyledContainer,
  StyledForm,
  StyledLogo,
} from './styles';

const LoginPage = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const emailInput = useRef();
  const passwordInput = useRef();

  // useEffect(() => {}, [
  //   emailInput.current.value,
  //   passwordInput.current.value,
  // ]);

  // function emailHandler(refValue) {
  //   setEmail(refValue);
  // }

  // function passwordHandler(refValue) {
  //   setPassword(refValue);
  // }

  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  // useEffect(() => {
  //   console.log(user);
  //   user && navigate('/', { replace: true });
  // }, [user]);

  return (
    <>
      {user ? (
        <Navigate to="/" replace />
      ) : (
        <StyledContainer>
          <StyledCard>
            <StyledLogo>Incorpify</StyledLogo>
            <StyledForm
              onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem('user', 'true');
                console.log('email: ', emailInput.current.value);
                console.log(
                  'password: ',
                  passwordInput.current.value
                );
                navigate('/', { replace: true });
              }}
            >
              <Input
                // value={email}
                refProp={emailInput}
                // handler={emailHandler}
                placeholder="Email"
                type="email"
                required
              />
              <InputPassword
                // value={password}
                refProp={passwordInput}
                // handler={passwordHandler}
                placeholder="Password"
                required
              />
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
      )}
    </>
  );
};

export default LoginPage;
