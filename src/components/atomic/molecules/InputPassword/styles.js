import styled, { css } from 'styled-components';

const Container = styled.div`
  /* width: 440px; */
  /* display: inline-block; */
  ${({ minwidth, maxwidth }) => css`
    max-width: ${maxwidth || 'auto'};
    min-width: ${minwidth || 'auto'};
  `}

  position: relative;
  box-sizing: border-box;
  & > input[type='password'] {
    color: ${({ theme }) => theme.colors['cl-text-light']};
    letter-spacing: 3px;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #bdc6da;
  border-radius: 8px;
  padding: 9px 50px 9px 20px;
  outline: none;

  &::placeholder {
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors['cl-text-light']};
  }

  color: ${({ theme }) => theme.colors['cl-text-dark']};
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};
  `}
`;

const HideButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  border: none;
  outline: none;
  right: 0;
  top: 0;
  height: 100%;
`;

export { Container, HideButton, StyledInput };
