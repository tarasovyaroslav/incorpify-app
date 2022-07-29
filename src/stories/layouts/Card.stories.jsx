import React from 'react';

import Card from 'components/layouts/Card';
import Theme from 'components/Theme';

export default {
  title: 'Layouts/Card',
  component: Card,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <Card {...args}>Some content</Card>;

export const Default = Template.bind({});
Default.args = {};

export const Sized = Template.bind({});
Sized.args = {
  width: '300px',
  height: '200px',
};

export const MinMaxSized = Template.bind({});
MinMaxSized.args = {
  maxwidth: '500px',
  minwidth: '200px',
  maxheight: '300px',
  minheight: '200px',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: 'Some header',
  width: '300px',
  height: '200px',
};
