import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';
import Select from 'components/atomic/atoms/Select';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  StyledHeader,
  SelectContainer,
  HeaderMenu,
  HeaderNav,
  HeaderNavItem,
} from './styles';

const Header = ({ options, alertscount, user, handler }) => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <SelectContainer>
        Select Company
        <Select options={options} minwidth="240px" />
      </SelectContainer>
      <HeaderMenu>
        <HeaderNav>
          <HeaderNavItem to="#" alertscount={alertscount}>
            <Icon icon="header:alerts" />
          </HeaderNavItem>
          <HeaderNavItem to="#">
            <Icon icon="header:help" />
          </HeaderNavItem>
          <HeaderNavItem to="/settings">
            <Icon icon="header:settings" />
          </HeaderNavItem>
        </HeaderNav>
        <Button
          borderless
          width="100px"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handler(null);
            localStorage.removeItem('user');
            navigate('/login', { replace: true });
          }}
        >
          Sign&nbsp;Out
        </Button>
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
