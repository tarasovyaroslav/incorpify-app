import React from 'react';

import Button from 'components/atomic/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Click me!</Button>;

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
