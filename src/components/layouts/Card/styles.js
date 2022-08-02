import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  /* padding: 26px 20px; */

  ${({ theme }) => css`
    background-color: ${theme.colors['cl-card-bg']};
    border: 1px solid ${theme.colors['cl-card-border']};
  `}
  gap: 12px;

  ${({
    width,
    height,
    minheight,
    maxheight,
    minwidth,
    maxwidth,
  }) => css`
    /* display: inline; */
    width: ${width || 'auto'};
    height: ${height || 'auto'};
    min-height: ${minheight || 'auto'};
    max-height: ${maxheight || 'auto'};
    min-width: ${minwidth || 'auto'};
    max-width: ${maxwidth || 'none'};
  `}
`;

// const CardHeader = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 18px;

//   box-sizing: border-box;
//   border-bottom: 1px solid #dbe4f0;
//   align-items: center;

//   ${({ theme }) => css`
//     color: ${theme.colors['cl-text-light']};
//   `}

//   width: 100%;
//   height: 66px;
//   padding: 20px 30px;
// `;

// const CardContent = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   flex-grow: 1;
//   padding: 20px 30px;
// `;

export { StyledCard };
