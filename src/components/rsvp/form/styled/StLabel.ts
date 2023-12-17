import styled from 'styled-components';
import { colorSystem } from '../../../../shared/constants';

const StLabel = styled.label`
  text-align: left;
  font-size: 25px;
  margin-left: 20px;
  color: ${colorSystem.defaultColorLight};
  vertical-align: text-top;

  span {
    font-size: 27px;
    font-weight: 500;
  }
`;

export default StLabel;
