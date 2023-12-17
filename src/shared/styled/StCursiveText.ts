import { styled } from 'styled-components';

interface StCursiveTextProps {
  fontSize?: string;
  opacity?: string;
}

const StCursiveText = styled.h1<StCursiveTextProps>`
  flex: 1;
  font-weight: 100;
  font-family: Birthstone Bounce, HandwritingCyrillic;
  font-size: ${(props) => props.fontSize || '50px'};
  margin: 0;
  opacity: ${(props) => props.opacity || '100%'};
`;
export default StCursiveText;
