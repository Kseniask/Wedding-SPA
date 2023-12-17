import { styled } from 'styled-components';
import { MarginProps, margin } from 'styled-system';
interface StHeaderProps {
  letterSpacing?: string;
  fontSize?: string;
  color?: string;
}
const StHeader = styled.h1<MarginProps & StHeaderProps>`
  flex: 1;
  font-family: Lustria, Raleway;
  font-size: ${(props) => props.fontSize || '27px'};
  font-weight: 100;
  letter-spacing: ${(props) => props.letterSpacing || '6px'};
  text-align: center;
  ${(props) => (props.color ? `color: ${props.color};` : '')}

  .cursive {
    font-family: Birthstone Bounce, HandwritingCyrillic;
    letter-spacing: 2px;
    font-size: 40px;
  }
  ${margin}
`;
export default StHeader;
