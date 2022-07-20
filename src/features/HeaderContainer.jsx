import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent || 'stretch'};
  align-items: center;
  height: 80px;
  width: 100%;
`;

export default HeaderContainer;
