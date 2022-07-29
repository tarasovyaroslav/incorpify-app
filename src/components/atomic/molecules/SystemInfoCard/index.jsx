import React from 'react';
import StyledCard from './styles';

// import systemInfoItems from './dataItems';
import Icon from 'components/atomic/atoms/Icon';
import colors from 'components/Theme/colors';

const Card = ({ id, icon, title, value }) => {
  return (
    <StyledCard>
      <Icon
        icon={icon}
        color={colors[`cl-item${id}`]}
        size="44px"
        padding="11px"
        rounded
      />
      <div className="card-data">
        <div className="card-title">{title}</div>
        <div className="card-value">
          <span>{value}</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
