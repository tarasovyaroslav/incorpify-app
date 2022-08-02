import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from 'routing/ProtectedRoute';

// import Header from 'components/atomic/organisms/Header';
// import Sidebar from 'components/atomic/organisms/Sidebar';

import ProfilePage from 'components/atomic/pages/ProfilePage';
import DocumentsPage from 'components/atomic/pages/DocumentsPage';
import ActionsPage from 'components/atomic/pages/ActionsPage';
import ServicesPage from 'components/atomic/pages/ServicesPage';
import MailboxPage from 'components/atomic/pages/MailboxPage ';
import BillingPage from 'components/atomic/pages/BillingPage';
import SupportPage from 'components/atomic/pages/SupportPage';
import SettingsPage from 'components/atomic/pages/SettingsPage';
import LoginPage from 'components/atomic/pages/LoginPage';
import ForgotPasswordPage from 'components/atomic/pages/ForgotPasswordPage';
import PageLayout from 'components/layouts/PageLayout';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  // const user = localStorage.getItem('user');
  console.log('app', user);

  function userHandler(value) {
    setUser(value);
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage user={user} handler={userHandler} />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route element={<ProtectedRoute user={user} />}>
          <Route
            element={<PageLayout user={user} handler={userHandler} />}
          >
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
