import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Page from 'components/atomic/templates/Page';
import Theme from 'components/Theme';

export default {
  title: 'Templates/Page',
  component: Page,
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

const Template = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const InContainer = Template.bind({});
InContainer.args = {};
InContainer.decorators = [
  (Story) => (
    <div
      style={{
        width: '1366px',
        height: '768px',
        boxShadow: '3px 3px 15px lightgray',
        backgroundColor: '#00000011',
      }}
    >
      <Story />
    </div>
  ),
];
