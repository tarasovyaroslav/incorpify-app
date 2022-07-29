import React from 'react';

import Sidebar from 'components/atomic/organisms/Sidebar';
import Theme from 'components/Theme';

import {
  navitems,
  footeritems,
} from 'components/atomic/organisms/Sidebar/menuItems';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
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

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithNavItems = Template.bind({});
WithNavItems.args = {
  navitems,
};

export const WithFooterItems = Template.bind({});
WithFooterItems.args = {
  navitems,
  footeritems,
};

export const InContainer = Template.bind({});
InContainer.args = {
  navitems,
  footeritems,
};
InContainer.decorators = [
  (Story) => (
    <div
      style={{
        width: '1024px',
        height: '768px',
        boxShadow: '3px 3px 15px lightgray',
      }}
    >
      <Story />
    </div>
  ),
];
