import React from 'react';
import { components } from 'react-select';

import { ReactComponent as TriangleIcon } from './assets/dropdown.svg';
import { SelectStyled } from './styles';

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

const Select = ({ options, ...otherProps }) => {
  return (
    <SelectStyled
      classNamePrefix="react-select"
      options={options}
      components={{ DropdownIndicator, IndicatorSeparator }}
      {...otherProps}
    />
  );
};

export default Select;
