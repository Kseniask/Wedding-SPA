import { ErrorMessage, Field } from 'formik';
import React from 'react';
import StDiv from '../../../shared/styled/StDiv';
import StLabel from './styled/StLabel';
import StTextField from './styled/StTextField';
import StErrorMessage from './styled/StErrorMessage';

interface InputFieldProps {
  label: string;
  name: string;
  width?: string;
}

const InputField = ({ label, name, width }: InputFieldProps) => {
  return (
    <StDiv marginBottom="30px">
      <StLabel htmlFor={`input-label-${name}`}>{label}</StLabel>
      <StTextField type="text" name={name} id={`input-${name}`} width={width} />
      <StErrorMessage name={name} component="div" className="input-error" />
    </StDiv>
  );
};

export default InputField;
