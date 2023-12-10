import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import StDiv from '../../shared/styled/StDiv';
import { RsvpFormValues } from '../../types/RsvpFormValues';
import RadioField from './form/RadioField';
import StVerticalLine from './form/styled/StVerticalLine';
import InputField from './form/InputField';
import StRsvpButton from './form/styled/StRsvpButton';
import StErrorMessage from './form/styled/StErrorMessage';
import { SendEmail } from '../../shared/services/EmailService';
import { hasRespondedKey } from '../../shared/constants';

const validationSchema = Yup.object().shape({
  attending: Yup.string().required("Response is required"),
  numberOfGuests: Yup.string().required('Number of guests is required'),
  guestName: Yup.string().required('Guest\'s name is required'),
});

const initialValues = {
  attending: '',
  numberOfGuests: '',
  guestName: '',
  songRequest: '',
};

interface RsvpFormProps {
  setIsMessageSent: (isSent: boolean) => void
}

const RsvpForm = ({setIsMessageSent} : RsvpFormProps) => {
  const onSubmit = async (values: RsvpFormValues) => {
    try {
      await SendEmail(values);  
      setIsMessageSent(true);
      localStorage.setItem(hasRespondedKey, 'true');
    } catch (e: any) {
      alert("Unable to send email, sorry. Try again later")
      console.log("Unable to sent email: ", e.message)
    }
  };

  return (
    <Formik<RsvpFormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values }) => (<Form>
        <StDiv display="flex" className="rsvp-form-container" position="relative">
            <StDiv flex={1} id='radio-group'>
                <StErrorMessage name="attending" component="div" className="input-error"/>
                <RadioField value="yes" text="YES!" subText="We can make it" />
                <RadioField value="no" text="No." subText="Sorry, we can't" />
            </StDiv>
            <StVerticalLine />
            <StDiv flex={2} id="form-group">
                <InputField label='Number of Guests:*' name="numberOfGuests" width="250px"/>
                <InputField label="Guest's Name:*" name="guestName" width="370px"/>
                <InputField label="Song Request:" name="songRequest" width="370px"/>
                <StRsvpButton onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.preventDefault();
                  handleSubmit();
                }}>Reply</StRsvpButton>
            </StDiv>
        </StDiv>
      </Form>)}
    </Formik>
  );
}

export default RsvpForm;