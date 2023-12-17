import { styled } from 'styled-components';
import { PositionProps, position } from 'styled-system';

const StDateItem = styled.div<PositionProps>`
  position: absolute;
  bottom: -2px;
  right: 0.5em;
  color: white;
  line-height: 60%;
  font-family: Purple Purse;
  font-size: 8em;
  ${position}
`;
export default StDateItem;
