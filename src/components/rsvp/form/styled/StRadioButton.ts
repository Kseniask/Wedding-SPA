import { Field } from "formik";
import styled from "styled-components";

interface StRadioButton {
    hasError: boolean;
}

const StRadioButton = styled(Field)`
    width: 30px;
    height: 30px;
    ${({ isSelected }) => (isSelected ? 'red' : 'black')};
    ${props => props.hasError ? "accent-color: red;": ""}
    &:checked {
        accent-color: #618161;
    }
`

export default StRadioButton;

