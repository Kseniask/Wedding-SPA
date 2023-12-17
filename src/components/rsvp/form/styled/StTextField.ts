import { Field } from 'formik';
import styled from 'styled-components';
import { colorSystem } from '../../../../shared/constants';

interface StTextFieldProps {
  width?: string;
}

const StTextField = styled(Field)<StTextFieldProps>`
  width: 90%;
  margin-left: 15px;
  border: none;
  border-bottom: 2px solid ${colorSystem.lineColor};
  height: 40px;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  background-color: unset;

  &:focus {
    outline: unset;
  }
`;

export default StTextField;
