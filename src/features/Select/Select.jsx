import React from 'react';
import styled from 'styled-components';
import SelectReact, { components } from 'react-select';

import { ReactComponent as TriangleIcon } from './assets/triangle.svg';

const SelectStyled = styled(SelectReact)`
  min-width: 200px;
  width: 260px;
  height: 44px;

  .react-select__control {
    cursor: pointer;
    border-radius: 8px;
    background-color: #f2f5fb;
    outline: none;
    border: 1px solid white;
    transition: border 0.1s;
    &:hover {
      border: 1px solid #dbe4f0;
    }
  }

  .react-select__single-value {
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
  }

  .react-select__menu {
    background-color: #f2f5fb;
  }

  .react-select__option {
    background-color: #f2f5fb;
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: #d8e3fa;
    }
  }

  .react-select__placeholder {
    color: #7c8db5;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 400;
  }
`;

const DropdownIndicator = (innerProps) => {
  return (
    <components.DropdownIndicator {...innerProps}>
      <TriangleIcon />
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={{ display: 'none' }} {...innerProps} />;
};

const Select = ({ options }) => {
  return (
    <SelectStyled
      classNamePrefix="react-select"
      options={options}
      components={{ DropdownIndicator, IndicatorSeparator }}
    />
  );
};

export default Select;
