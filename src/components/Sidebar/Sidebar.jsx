import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from 'common/Button';
import HeaderContainer from 'common/HeaderContainer';

import SidebarFooter from './SidebarFooter';
import MenuItem from './MenuItem';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 650px;
  min-width: 270px;
  background: linear-gradient(0.5turn, #006baa, #0093c0);
  color: white;
`;

const Logo = styled.div`
  text-align: center;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 1px;
`;

const MyBusiness = styled(MenuItem)`
  background-color: #015c8c;
  margin-bottom: 10px;
  color: #07cea4;
`;

const SidebarMenu = styled.nav`
  width: 100%;
  margin-bottom: 60px;
  /* background-color: #015c8c; */
`;

const NewBusinessButton = styled(Button)`
  width: 80%;
  width: 200px;
  height: 44px;
  background-color: #07cea4;
  color: white;
`;

const LinkStyled = styled(Link)`
  /* display: flex; */
  /* justify-content: center; */
  text-decoration: none;
  color: inherit;
  /* width: 100%; */
`;

const menuItems = [
  {
    id: 1,
    to: 'profile',
    text: 'Company Profile',
    icon: 'ph:files-light',
  },
  {
    id: 2,
    to: 'docs',
    text: 'Company Documents',
    icon: 'ph:files-light',
  },
  {
    id: 3,
    to: 'actions',
    text: 'Action Required',
    icon: 'carbon:touch-interaction',
  },
  {
    id: 4,
    to: 'services',
    text: 'Additional Services',
    icon: 'iconoir:more-vert-circled-outline',
  },
  {
    id: 5,
    to: 'mail',
    text: 'Mailbox',
    icon: 'fluent:mail-48-regular',
  },
];

const Sidebar = ({ page }) => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <LinkStyled to="/">INCORPIFY</LinkStyled>
        </Logo>
      </HeaderContainer>

      <SidebarMenu>
        <LinkStyled to="/">
          <MyBusiness icon="ep:suitcase" indicator>
            My Business
          </MyBusiness>
        </LinkStyled>

        {menuItems.map(({ id, to, text, icon }) => {
          return (
            <LinkStyled key={id} to={`/${to}`}>
              <MenuItem active={page === to} icon={icon}>
                {text}
              </MenuItem>
            </LinkStyled>
          );
        })}
      </SidebarMenu>

      <NewBusinessButton>Start New Business</NewBusinessButton>

      <SidebarFooter>
        <LinkStyled to="/profile/billing">
          <MenuItem active={page === 'billing'} icon="vaadin:invoice">
            Billing
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/profile/support">
          <MenuItem active={page === 'support'} icon="icons8:support">
            Ticket Support
          </MenuItem>
        </LinkStyled>
      </SidebarFooter>
    </Container>
  );
};

export default Sidebar;
