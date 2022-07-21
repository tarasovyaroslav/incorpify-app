import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import HeaderContainer from 'features/HeaderContainer';

const SettingsHeaderContainer = styled(HeaderContainer)`
  display: flex;
  gap: 20px;
  height: 46px;
  border-bottom: 1px solid #bdc6da;
  margin-bottom: 54px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 150px;
  color: ${({ active }) => (active ? '#07CEA4' : '#25396F')};
  border-bottom: ${({ active }) =>
    active ? '3px solid #07CEA4' : 'none'};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ active }) =>
      active ? '#07CEA433' : '#25396F22'};
    border-bottom: ${({ active }) =>
      active ? '3px solid #07CEA4' : '3px solid #25396F33'};
  }
`;

const LinkStyled = styled(Link)`
  /* display: flex; */
  /* justify-content: center; */
  text-decoration: none;
  color: inherit;
  /* width: 100%; */
  height: 100%;
`;

const SettingsNav = () => {
  const { pathname } = useLocation();
  const module = pathname.slice(1).split('/')[1];

  return (
    <SettingsHeaderContainer>
      <LinkStyled to="/profile/settings">
        <HeaderItem active={module === `settings`}>
          Account Settings
        </HeaderItem>
      </LinkStyled>
      <LinkStyled to="/profile/billing">
        <HeaderItem active={module === `billing`}>Billing</HeaderItem>
      </LinkStyled>
      <LinkStyled to="/profile/support">
        <HeaderItem active={module === `support`}>Support</HeaderItem>
      </LinkStyled>
    </SettingsHeaderContainer>
  );
};

export default SettingsNav;
