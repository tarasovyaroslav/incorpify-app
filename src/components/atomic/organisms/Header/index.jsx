import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';
import Select from 'components/atomic/atoms/Select';
import colors from 'components/Theme/colors';
import React from 'react';

import {
  StyledHeader,
  SelectContainer,
  HeaderMenu,
  HeaderNav,
  HeaderNavItem,
} from './styles';

const Header = ({ options, alertscount }) => {
  return (
    <StyledHeader>
      <SelectContainer>
        Select Company
        <Select options={options} minwidth="260px" />
      </SelectContainer>
      <HeaderMenu>
        <HeaderNav>
          <HeaderNavItem to="alerts" alertscount={alertscount}>
            <Icon icon="header:alerts" />
          </HeaderNavItem>
          <HeaderNavItem to="help">
            <Icon icon="header:help" />
          </HeaderNavItem>
          <HeaderNavItem to="settings">
            <Icon icon="header:settings" />
          </HeaderNavItem>
        </HeaderNav>
        <Button outlined>Sign Out</Button>
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
