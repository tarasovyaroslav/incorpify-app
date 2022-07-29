import styled from 'styled-components';
import colors from 'res/colors';

const StyledInput = styled.input`
  max-width: 440px;
  height: 44px;
  border: 1px solid #bdc6da;
  border-radius: 8px;
  padding: 9px 20px;
  color: ${colors['cl-text-dark']};
  outline: none;
`;

export default StyledInput;
