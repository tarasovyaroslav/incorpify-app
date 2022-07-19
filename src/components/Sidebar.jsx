import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import Footer from './Footer';
import HeaderContainer from './HeaderContainer';

import MenuItem from './MenuItem';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 650px;
  height: 100%;
  min-width: 270px;
  background: linear-gradient(0.5turn, #006baa, #0093c0);
  color: white;
`;

const Logo = styled.div`
  text-align: center;
  justify-content: center;
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
  background-color: #07cea4;
  color: white;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

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

        <LinkStyled to="/profile">
          <MenuItem
            active={page === 'profile'}
            icon="iconoir:profile-circled"
          >
            Company Profile
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/docs">
          <MenuItem active={page === 'docs'} icon="ph:files-light">
            Company Documents
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/actions">
          <MenuItem
            active={page === 'actions'}
            icon="carbon:touch-interaction"
          >
            Action Required
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/services">
          <MenuItem
            active={page === 'services'}
            icon="iconoir:more-vert-circled-outline"
          >
            Additional Services
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/mail">
          <MenuItem
            active={page === 'mail'}
            icon="fluent:mail-48-regular"
          >
            Mailbox
          </MenuItem>
        </LinkStyled>
      </SidebarMenu>
      <NewBusinessButton>Start New Business</NewBusinessButton>
      <Footer>
        <LinkStyled to="/billing">
          <MenuItem active={page === 'billing'} icon="vaadin:invoice">
            Billing
          </MenuItem>
        </LinkStyled>

        <LinkStyled to="/support">
          <MenuItem active={page === 'support'} icon="icons8:support">
            Ticket Support
          </MenuItem>
        </LinkStyled>
      </Footer>
    </Container>
  );
};

export default Sidebar;
