import Card from 'components/layouts/Card';
import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;
  max-width: 33.333%;
  min-width: 200px;
  flex-grow: 1;
  min-height: 200px;
  padding: 15px 25px;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px lightgray;
  margin: auto;
  ${({ theme }) => css`
    font-size: ${theme.fontsizes.large};
  `}
`;

const StyledLogo = styled.div`
  text-align: center;
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.logo};
    font-size: ${theme.fontsizes.xxlarge};
  `}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

export { StyledContainer, StyledCard, StyledForm, StyledLogo };
