import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';

import Button from 'common/Button';
import Select from 'common/Select/Select';

import HeaderContainer from 'common/HeaderContainer';

const Container = styled.header`
  /* flex-grow: 1; */
  background-color: white;
  padding: 0 42px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
  color: #25396f;
  font-weight: 700;
  font-size: 1rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  border-left: 1px solid #dbe4f0;
  padding-left: 30px;
  gap: 60px;
`;

const IconContainer = styled.div`
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  &:hover {
    background-color: #d8e3fa;
  }
`;

const IconStyled = styled(Icon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

const MenuIcon = ({ icon, ...otherProps }) => {
  return (
    <IconContainer>
      <IconStyled
        // width={32}
        // height={32}
        color="#7C8DB5"
        icon={icon}
        {...otherProps}
      />
    </IconContainer>
  );
};

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 23px;
`;

const SignButton = styled(Button)`
  color: #0181b6;
  background-color: transparent;
  border: 1px solid white;
  transition: all 0.1s;
  &:hover {
    background-color: #f2f5fb;
    border: 1px solid #dbe4f0;
  }
`;

const options = [
  {
    value: 'Innova Labs LLC',
    label: 'Innova Labs LLC',
  },
];

const Header = () => {
  return (
    <Container>
      <HeaderContainer justifyContent="space-between">
        <SelectContainer>
          Select&nbsp;Company
          <Select options={options} />
        </SelectContainer>
        <HeaderMenu>
          <Icons>
            <MenuIcon icon="bytesize:bell" />
            <MenuIcon icon="ant-design:question-circle-outlined" />
            <Link to="/profile/settings">
              <MenuIcon icon="carbon:settings" />
            </Link>
          </Icons>
          <SignButton>Sign&nbsp;Out</SignButton>
        </HeaderMenu>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
