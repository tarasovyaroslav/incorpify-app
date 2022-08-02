import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors['cl-content-bg']};
  padding: 48px 42px;
`;

const TitleContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.semibold};
    color: ${theme.colors['cl-text-dark']};
  `}
`;

const Title = styled.div`
  line-height: 3.125rem;
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.xxlarge};
    font-weight: ${theme.fontweights.semibold};
    color: ${theme.colors['cl-text-dark']};
  `}
`;

const Subtitle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
    font-size: ${theme.fontsizes.medium};
    font-weight: ${theme.fontweights.medium};
    color: ${theme.colors['cl-text-dark']};
  `}
`;

export {
  Container,
  ContentContainer,
  MainContainer,
  TitleContainer,
  Title,
  Subtitle,
};
