import Button from 'components/atomic/atoms/Button';
import React from 'react';

import {
  SidebarContainer,
  SidebarLogo,
  SidebarNav,
  SidebarFooter,
  SidebarItem,
  SidebarItemIcon,
  SidebarItemText,
  SidebarItemIndicator,
} from './styles';

const Sidebar = ({ navitems, footeritems, active }) => {
  return (
    <SidebarContainer>
      <SidebarLogo>incorpify</SidebarLogo>
      <SidebarNav>
        {navitems &&
          navitems.map(({ id, icon, text, to, indicator, home }) => (
            <SidebarItem
              key={id}
              to={to}
              home={home ? home.toString() : undefined}
            >
              <SidebarItemIcon icon={icon} size="24px" />
              <SidebarItemText>{text}</SidebarItemText>
              <SidebarItemIndicator indicator={indicator} />
            </SidebarItem>
          ))}
      </SidebarNav>
      <Button primary width="200px">
        Start New Business
      </Button>
      <SidebarFooter>
        {footeritems &&
          footeritems.map(({ id, icon, text, to, indicator }) => (
            <SidebarItem key={id} to={to}>
              <SidebarItemIcon icon={icon} size="24px" />
              <SidebarItemText>{text}</SidebarItemText>
              <SidebarItemIndicator indicator={indicator} />
            </SidebarItem>
          ))}
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
