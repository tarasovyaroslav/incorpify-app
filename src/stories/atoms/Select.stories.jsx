import React from 'react';

import Select from 'components/atomic/atoms/Select';
import Theme from 'components/Theme';

export default {
  title: 'Atoms/Select',
  component: Select,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const OneItem = Template.bind({});
OneItem.args = {
  options: [
    {
      label: 'Some item #1',
      value: 'item1',
    },
  ],
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  options: [
    {
      label: 'Some item #1',
      value: 'item1',
    },
    {
      label: 'Some item #2',
      value: 'item2',
    },
    {
      label: 'Some very long string name item with number #3',
      value: 'item3',
    },
    {
      label: '',
      value: 'item4',
    },
  ],
};

export const Sized = Template.bind({});
Sized.args = {
  minwidth: '500px',
  maxwidth: '800px',
};

export const InContainer = Template.bind({});
InContainer.args = {
  options: [
    {
      label: 'Some item #1',
      value: 'item1',
    },
  ],
  width: '100%',
};

InContainer.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'stretch',
        gap: '16px',
        width: '600px',
        height: '200px',
        padding: '16px',
        boxShadow: '5px 5px 15px lightgray',
      }}
    >
      Select&nbsp;Company:
      <Story />
    </div>
  ),
];
