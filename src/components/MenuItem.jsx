import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
  padding: 8px;
  padding-left: 30px;
  /* text-align: center; */
  background-color: ${({ active }) => (active ? '#015c8c' : '')};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #0b6392;
  }
`;

const IconStyled = styled(Icon)`
  margin-right: 8px;
`;

const Text = styled.div`
  flex-grow: 1;
`;

const Indicator = styled.div`
  display: ${({ indicator }) => (indicator ? 'block' : 'none')};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #07cea4;
`;

const MenuItem = ({
  icon,
  active,
  children,
  indicator,
  ...otherProps
}) => {
  return (
    <Container active={active} {...otherProps}>
      <IconStyled width="1.5rem" height="1.5rem" icon={icon} />
      <Text>{children}</Text>
      <Indicator indicator={indicator} />
    </Container>
  );
};

export default MenuItem;
