import React from 'react';

import Button from 'components/atomic/atoms/Button';
import Theme from 'components/Theme';

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const Borderless = Template.bind({});
Borderless.args = {
  borderless: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WidthChanged = Template.bind({});
WidthChanged.args = {
  primary: true,
  width: '450px',
};
