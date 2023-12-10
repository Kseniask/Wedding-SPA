import { Field } from "formik";
import styled from "styled-components";
import { colorSystem } from "../../../../shared/constants";

interface StTextFieldProps {
    width? :string;
}

const StTextField = styled(Field)<StTextFieldProps>`
margin-left: 15px;
border: none;
border-bottom: 2px solid ${colorSystem.lineColor};
height: 30px;
${props => props.width ? `width: ${props.width};` : ''}
`

export default StTextField;