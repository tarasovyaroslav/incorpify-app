import Icon from 'components/atomic/atoms/Icon';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 260px;
  max-width: 260px;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.colors['cl-sidebar-background']};
    color: ${theme.colors['cl-sidebar-text']};

    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.regular};
  `}
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2px;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.logo};
    font-size: ${theme.fontsizes.xxlarge};
    font-weight: ${theme.fontweights.regular};
  `}
`;

const SidebarNav = styled.div`
  margin-bottom: 42px;
  width: 100%;
`;

const SidebarFooter = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 80px 0;
`;

const SidebarItem = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 40px;
  padding: 8px 18px 8px 30px;
  cursor: pointer;

  ${({ theme }) => css`
    /* background: ${theme.colors['cl-sidebar-background']}; */
    color: ${theme.colors['cl-sidebar-text']};
    font-size: ${theme.fontsizes.small};
  `}

  transition: all 0.2s;
  &:hover {
    background-color: #0b6392;
  }

  ${({ theme, home }) =>
    home &&
    css`
      background-color: ${theme.colors['cl-sidebar-selected']};
      color: ${theme.colors['cl-active']};
      margin: 8px 0;
    `}

  ${({ theme, selected }) =>
    selected &&
    css`
      background-color: ${theme.colors['cl-sidebar-selected']};
    `}

    ${({ theme, separate }) =>
    separate &&
    css`
      margin: 10px 0;
    `}
`;

const SidebarItemIcon = styled(Icon)``;

const SidebarItemText = styled.div`
  flex-grow: 1;
`;

const SidebarItemIndicator = styled.div`
  display: ${({ indicator }) => (indicator ? 'block' : 'none')};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #07cea4;
`;

export {
  SidebarContainer,
  SidebarLogo,
  SidebarNav,
  SidebarFooter,
  SidebarItem,
  SidebarItemIcon,
  SidebarItemText,
  SidebarItemIndicator,
};
