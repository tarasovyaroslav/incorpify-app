import React, { useRef } from 'react';
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

const LoginPage = ({ user, handler }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const emailInput = useRef();
  const passwordInput = useRef();

  // function emailHandler(refValue) {
  //   setEmail(refValue);
  // }

  // function passwordHandler(refValue) {
  //   setPassword(refValue);
  // }

  function submitHandler(e) {
    const validateEmail = (email) => {
      return email.match(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const validatePassword = (password) => {
      return password.match(
        // eslint-disable-next-line
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/
      );
    };

    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    if (!validateEmail(email)) {
      alert('Not valid Email!\nFormat: name@host.domain');
      return;
    }

    if (!validatePassword(password)) {
      alert(
        'Not valid Password!\nAt least:\n- 6 chars\n- 1 number\n- 1 uppercase letter'
      );
      return;
    }

    console.log('email: ', email);
    console.log('password: ', password);

    localStorage.setItem('user', 'true');
    handler(localStorage.getItem('user'));
    // navigate('/', { replace: true });
  }

  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <Navigate to="/" replace />
      ) : (
        <StyledContainer>
          <StyledCard>
            <StyledLogo>Incorpify</StyledLogo>
            <StyledForm onSubmit={submitHandler}>
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
