import React from 'react';
import styled from 'styled-components';
import { Route, Routes, Navigate } from 'react-router-dom';

import Profile from 'pages/Profile';
import Documents from 'pages/Documents';
import ActionRequired from 'pages/ActionRequired';
import Services from 'pages/Services';
import Mailbox from 'pages/Mailbox';
import Billing from 'pages/Billing';
import Support from 'pages/Support';
import Settings from 'pages/Settings';
// import Home from 'pages/Home';

const Container = styled.section`
  height: 100%;
  /* width: 100%; */
  padding: 50px 42px;
  background-color: #f6f8fa;
  overflow-y: auto;
`;

const Content = () => {
  return (
    <Container>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="docs" element={<Documents />} />
        <Route path="actions" element={<ActionRequired />} />
        <Route path="services" element={<Services />} />
        <Route path="mail" element={<Mailbox />} />
        <Route path="billing" element={<Billing />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="*"
          element={<Navigate to="/profile" replace />}
        />
      </Routes>
    </Container>
  );
};

export default Content;
