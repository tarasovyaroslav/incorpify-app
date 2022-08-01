import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 84px;
  padding: 20px 42px;
  gap: 30px;

  ${({ theme }) => css`
    background-color: ${theme.colors['cl-header-bg']};
  `}
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  height: 100%;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.semibold};
    color: ${theme.colors['cl-text-dark']};
  `}
`;
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  height: 100%;
  border-left: 1px solid
    ${({ theme }) => theme.colors['cl-header-divider']};
  padding-left: 30px;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`;

const HeaderNavItem = styled(Link)`
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;

  ${({ theme }) => css`
    color: ${theme.colors['cl-text-light']};
  `}

  &:hover {
    ${({ theme }) => css`
      background-color: #00000011;
    `}
  }

  ${({ alertscount, theme }) =>
    alertscount &&
    alertscount > 0 &&
    css`
      &::after {
        content: '${alertscount > 9 ? '9+' : alertscount}';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        right: 0;
        top: 0;

        color: ${theme.colors['cl-alert-text']};
        font-family: ${theme.fontfamilies.regular};
        font-size: ${theme.fontsizes.small};
        font-weight: ${theme.fontweights.semibold};

        background-color: ${theme.colors['cl-alert-bg']};
      }
    `}
`;

export {
  StyledHeader,
  SelectContainer,
  HeaderMenu,
  HeaderNav,
  HeaderNavItem,
};
