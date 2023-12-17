import styled from 'styled-components';
import { colorSystem } from '../../../../shared/constants';

interface StRsvpButtonProps {
  fontSize?: string;
}
const StRsvpButton = styled.div<StRsvpButtonProps>`
  display: flex;
  height: 70px;
  min-width: 170px;
  width: max-content;
  padding: 5px 15px;
  font-size: ${(props) => props.fontSize || '25px'};
  font-family: 'Abhaya Libre';
  border: 1px solid ${colorSystem.borderColor};
  justify-content: center;
  align-items: center;
  background-color: #f9f8f8;
  border-radius: 3px;
  margin: 60px auto 0 auto;
  cursor: pointer;
`;

export default StRsvpButton;
