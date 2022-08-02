import React from 'react';

import InputPassword from 'components/atomic/molecules/InputPassword';
import Theme from 'components/Theme';

export default {
  title: 'Molecules/InputPassword',
  component: InputPassword,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <InputPassword {...args} />;

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
