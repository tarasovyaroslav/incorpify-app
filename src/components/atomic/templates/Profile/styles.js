import styled, { css } from 'styled-components';
import Card from 'components/layouts/Card';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  /* height: 100%; */
  gap: 30px;

  ${({ theme }) => css`
    font-family: ${theme.fontfamilies.regular};
  `}
`;

const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* padding: 20px; */
  flex-grow: 1;
  max-width: 800px;
  box-sizing: border-box;
`;

const SystemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  min-width: 252px;
`;

const CompanyItemsList = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
  padding: 32px 20px;
`;

const ChangeInfo = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 102px;
  padding: 32px 20px;
  box-sizing: border-box;

  ${({ theme }) => css`
    color: ${theme.colors['cl-text-dark']};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const DissolveBusiness = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 136px;
  gap: 18px;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors['cl-text-black']};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const CardTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors['cl-text-light']};
    font-size: ${theme.fontsizes.regular};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const SystemInfoCard = styled(Card)`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 26px 20px;
  height: 96px;
`;

const SystemInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SystemInfoValue = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors['cl-text-dark']};
    font-size: ${theme.fontsizes.large};
    font-weight: ${theme.fontweights.medium};
  `}
`;

const StatusValue = styled.div`
  ${({ theme, active }) => css`
    color: ${active
      ? theme.colors['cl-active']
      : theme.colors['cl-text-danger']};
    font-size: ${theme.fontsizes.large};
    font-weight: ${theme.fontweights.medium};
  `}
`;

export {
  ProfileContainer,
  CompanyInfoContainer,
  SystemInfoContainer,
  CompanyItemsList,
  ChangeInfo,
  DissolveBusiness,
  CardTitle,
  SystemInfoCard,
  SystemInfoContent,
  SystemInfoValue,
  StatusValue,
};
