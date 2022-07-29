import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/atomic/atoms/Button';
import Select from 'components/atomic/atoms/Select';
import Icon from 'components/atomic/atoms/Icon';

import colors from 'res/colors';
import Input from 'components/atomic/atoms/Input';
import SystemInfoCard from 'components/atomic/molecules/SystemInfoCard';

import systemInfoItems from 'res/dataItems';

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  height: 100%;
  background: linear-gradient(0.5turn, #000000aa, #00000033);
`;

function App() {
  //   const { pathname } = useLocation();
  //   const currentPage = pathname.slice(1).split('/')[0];

  return (
    <Container>
      <Button>Some&nbsp;regular&nbsp;button</Button>
      <Button primary>Primary&nbsp;button</Button>
      <Button borderless>Borderless&nbsp;button</Button>
      <Select
        options={[
          {
            value: 'Innova Labs LLC',
            label: 'Innova Labs LLC',
          },
          {
            value: 'Some compant name',
            label: 'Some compant name',
          },
        ]}
      />
      <Icon
        icon="documents:ein"
        size="100px"
        color={colors['cl-item1']}
        padding="20px"
        rounded
      />
      <Input />
      {systemInfoItems.map((item) => (
        <SystemInfoCard
          id={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
        />
      ))}
    </Container>
  );
}

export default App;
