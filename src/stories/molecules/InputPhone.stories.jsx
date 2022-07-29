import React from 'react';

import InputPhone from 'components/atomic/molecules/InputPhone';
import Theme from 'components/Theme';

export default {
  title: 'Molecules/InputPhone',
  component: InputPhone,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <InputPhone {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MaxMinWidth = Template.bind({});
MaxMinWidth.args = {
  maxwidth: '500px',
  minwidth: '200px',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  alwaysShowMask: true,
};
