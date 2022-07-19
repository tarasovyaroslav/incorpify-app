import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';
import Select, { components } from 'react-select';

import { ReactComponent as TriangleIcon } from '../assets/triangle.svg';
import { Icon } from '@iconify/react';
import Button from './Button';
import { Link } from 'react-router-dom';

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

const SelectStyled = styled(Select)`
  min-width: 200px;
  width: 260px;
  height: 44px;

  .react-select__control {
    cursor: pointer;
    border-radius: 8px;
    background-color: #f2f5fb;
    outline: none;
    border: 1px solid white;
    transition: border 0.1s;
    &:hover {
      border: 1px solid #dbe4f0;
    }
  }

  .react-select__single-value {
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
  }

  .react-select__menu {
    background-color: #f2f5fb;
  }

  .react-select__option {
    background-color: #f2f5fb;
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: #d8e3fa;
    }
  }

  .react-select__placeholder {
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
  }
`;

const DropdownIndicator = (innerProps) => {
  return (
    <components.DropdownIndicator {...innerProps}>
      <TriangleIcon />
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={{ display: 'none' }} {...innerProps} />;
};

const HeaderMenu = styled.div`
  display: flex;
  border-left: 1px solid #dbe4f0;
  padding-left: 30px;
  gap: 60px;
`;

const IconStyled = styled(Icon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  &:hover {
    background-color: #d8e3fa;
  }
`;

const MenuIcon = ({ icon, ...otherProps }) => {
  return (
    <IconStyled
      // width={32}
      // height={32}
      color="#7C8DB5"
      icon={icon}
      {...otherProps}
    />
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
          <SelectStyled
            classNamePrefix="react-select"
            options={options}
            components={{ DropdownIndicator, IndicatorSeparator }}
          ></SelectStyled>
        </SelectContainer>
        <HeaderMenu>
          <Icons>
            <MenuIcon icon="bytesize:bell" />
            <MenuIcon icon="ant-design:question-circle-outlined" />
            <Link to="/settings">
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
