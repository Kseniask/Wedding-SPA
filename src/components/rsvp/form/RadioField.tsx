import React from 'react'
import StDiv from '../../../shared/styled/StDiv';
import StRadioLabel from './styled/StLabel';
import StRadioButton from './styled/StRadioButton';

interface RadioFieldProps {
    value: string;
    text: string;
    subText: string;
}
const RadioField = ({value, text, subText}: RadioFieldProps) => {
  return (
   <StDiv display= "flex" margin="30px 0" id={`answer-${value}`}>
      <StDiv>
        <StRadioButton id={`radio-field-${value}`} type="radio" name="attending" value={value}/>
        </StDiv>
        <StRadioLabel>
          <label htmlFor={`radio-field-${value}`}>
            <span>{text}</span>
            <br/>
            {subText}
          </label>
      </StRadioLabel>
    </StDiv>
  )
}

export default RadioField;