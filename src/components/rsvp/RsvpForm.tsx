import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup';
import StDiv from '../../shared/styled/StDiv';
import { RsvpFormValues } from '../../types/RsvpFormValues';
import RadioField from './form/RadioField';
import StVerticalLine from './form/styled/StVerticalLine';
import InputField from './form/InputField';
import StRsvpButton from './form/styled/StRsvpButton';
import StErrorMessage from './form/styled/StErrorMessage';
import { SendEmail } from '../../shared/services/EmailService';
import { Languages, hasRespondedKey } from '../../shared/constants';
import GlobalDataContext from '../../context/GlobalDataContext';

const validationSchema = Yup.object().shape({
  attending: Yup.string().required('Response is required'),
  numberOfGuests: Yup.string().required('Number of guests is required'),
  guestName: Yup.string().required("Guest's name is required"),
});

const initialValues = {
  attending: '',
  numberOfGuests: '',
  guestName: '',
  songRequest: '',
};

interface RsvpFormProps {
  setIsMessageSent: (isSent: boolean) => void;
}

const RsvpForm = ({ setIsMessageSent }: RsvpFormProps) => {
  const { themeValues, selectedLanguage } = useContext(GlobalDataContext);

  const onSubmit = async (values: RsvpFormValues) => {
    console.log('recipient name: ', process.env.RECIPIENT_NAME);
    try {
      await SendEmail(values);
      setIsMessageSent(true);
      localStorage.setItem(hasRespondedKey, 'true');
    } catch (e: any) {
      alert('Unable to send email, sorry. Try again later');
      console.log('Unable to sent email: ', e);
    }
  };

  return (
    <Formik<RsvpFormValues> initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <Form>
          <StDiv display="flex" className="rsvp-form-container" position="relative">
            <StDiv flex={1} id="radio-group">
              <StErrorMessage name="attending" component="div" className="input-error" />
              <RadioField value="yes" text={themeValues.yes} subText={themeValues.subTextYes} />
              <RadioField value="no" text={themeValues.no} subText={themeValues.subTextNo} />
            </StDiv>
            <StVerticalLine />
            <StDiv flex={2} id="form-group">
              <InputField label={themeValues.numberOfGuests} name="numberOfGuests" width="250px" />
              <InputField label={themeValues.guestNames} name="guestName" width="370px" />
              <InputField label={themeValues.songRequest} name="songRequest" width="370px" />
              <StRsvpButton
                fontSize={selectedLanguage === Languages.UA.code ? '25px' : '30px'}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {themeValues.reply}
              </StRsvpButton>
            </StDiv>
          </StDiv>
        </Form>
      )}
    </Formik>
  );
};

export default RsvpForm;
