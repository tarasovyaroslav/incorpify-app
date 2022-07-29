import React from 'react';

import { StyledCard, CardHeader, CardContent } from './styles';

const Card = ({ children, header, ...otherProps }) => {
  return (
    <StyledCard {...otherProps}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;
