import React from 'react';

import Icon from 'components/atomic/atoms/Icon';
import Theme from 'components/Theme';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [
    (Story) => (
      <Theme>
        <div
          style={{
            display: 'inline-block',
            boxShadow: '5px 5px 15px lightgray',
          }}
        >
          <Story />
        </div>
      </Theme>
    ),
  ],
};

const Template = (args) => <Icon {...args}>Click me!</Icon>;

export const Default = Template.bind({});
Default.args = {
  icon: 'profile:status',
  size: '128px',
};

export const Colorful = Template.bind({});
Colorful.args = {
  icon: 'profile:status',
  size: '128px',
  color: '#00aa77',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  rounded: true,
  icon: 'profile:status',
  size: '128px',
  color: '#09ff00',
  padding: '16px',
};
