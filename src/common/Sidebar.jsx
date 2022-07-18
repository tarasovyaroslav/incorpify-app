import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Footer from './Footer';
import HeaderContainer from './HeaderContainer';

import MenuItem from './MenuItem';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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
  /* padding: 8px; */
`;

const Sidebar = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>INCORPIFY</Logo>
      </HeaderContainer>
      <SidebarMenu>
        <MyBusiness icon="ep:suitcase" indicator>
          My Business
        </MyBusiness>
        <MenuItem active icon="iconoir:profile-circled">
          Company Profile
        </MenuItem>
        <MenuItem icon="ph:files-light">Company Documents</MenuItem>
        <MenuItem icon="carbon:touch-interaction">
          Action Required
        </MenuItem>
        <MenuItem icon="iconoir:more-vert-circled-outline">
          Additional Services
        </MenuItem>
        <MenuItem icon="fluent:mail-48-regular">Mailbox</MenuItem>
      </SidebarMenu>
      <NewBusinessButton>Start New Business</NewBusinessButton>
      <Footer>
        <MenuItem icon="vaadin:invoice">Billing</MenuItem>
        <MenuItem icon="icons8:support">Ticket Support</MenuItem>
      </Footer>
    </Container>
  );
};

export default Sidebar;
