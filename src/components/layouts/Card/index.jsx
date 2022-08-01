import React from 'react';

import { StyledCard } from './styles';

const Card = ({ children, header, ...otherProps }) => {
  return (
    <StyledCard {...otherProps}>
      {/* {header && <CardHeader>{header}</CardHeader>} */}
      {/* <CardContent>{children}</CardContent> */}
      {children}
    </StyledCard>
  );
};

export default Card;
