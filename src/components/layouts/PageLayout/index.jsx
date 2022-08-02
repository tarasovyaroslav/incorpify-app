import React, { useEffect } from 'react';

import {
  Container,
  ContentContainer,
  MainContainer,
} from 'components/atomic/templates/Page/styles';

import {
  footeritems,
  navitems,
} from 'components/atomic/organisms/Sidebar/menuItems';

import Header from 'components/atomic/organisms/Header';
import Sidebar from 'components/atomic/organisms/Sidebar';
import { Outlet } from 'react-router-dom';

const PageLayout = ({ user, handler }) => {
  // useEffect(() => {
  //   console.log(user, handler);
  //   handler(localStorage.getItem('user'));
  // }, []);

  return (
    <Container>
      <Sidebar navitems={navitems} footeritems={footeritems} />
      <ContentContainer>
        <Header
          user={user}
          handler={handler}
          options={[
            { label: '123', value: '123' },
            { label: '123123', value: '123123' },
          ]}
        />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </ContentContainer>
    </Container>
  );
};

export default PageLayout;
