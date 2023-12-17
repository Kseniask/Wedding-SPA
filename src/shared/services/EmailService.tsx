import emailjs from 'emailjs-com';
import { RsvpFormValues } from '../../types/RsvpFormValues';

export const SendEmail = async (formData: RsvpFormValues) => {
  const templateParams = {
    attending: formData.attending.toLocaleUpperCase(),
    'number-of-guests': formData.numberOfGuests,
    'guests-name': formData.guestName,
    'song-request':
      formData.songRequest && formData.songRequest.length > 0 ? `Song request: ${formData.songRequest}` : '',
  };
  await emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_PUBLIC_KEY,
  );
};
