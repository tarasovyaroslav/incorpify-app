import React from 'react';

import Header from 'components/atomic/organisms/Header';
import Theme from 'components/Theme';

// import {
//   navitems,
//   footeritems,
// } from 'components/atomic/organisms/Header/menuItems';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Theme>
          <Story />
        </Theme>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const InContainer = Template.bind({});
InContainer.args = {};
InContainer.decorators = [
  (Story) => (
    <div
      style={{
        width: '1024px',
        height: '768px',
        boxShadow: '3px 3px 15px lightgray',
        backgroundColor: '#00000011',
      }}
    >
      <Story />
    </div>
  ),
];

export const WithAlerts = Template.bind({});
WithAlerts.args = {
  alertscount: 5,
};
WithAlerts.decorators = [
  (Story) => (
    <div
      style={{
        width: '1024px',
        height: '768px',
        boxShadow: '3px 3px 15px lightgray',
        backgroundColor: '#00000011',
      }}
    >
      <Story />
    </div>
  ),
];
