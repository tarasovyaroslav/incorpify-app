import React from 'react';

import Input from 'components/atomic/atoms/Input';
import Theme from 'components/Theme';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MaxMinWidth = Template.bind({});
MaxMinWidth.args = {
  maxwidth: '500px',
  minwidth: '200px',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Type something...',
};
