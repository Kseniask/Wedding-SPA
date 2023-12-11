import emailjs from 'emailjs-com';
import { RsvpFormValues } from '../../types/RsvpFormValues';

  export const SendEmail = async (formData: RsvpFormValues) => {
    const templateParams = {
      to_name: process.env.RECIPIENT_NAME,
      attending: formData.attending.toLocaleUpperCase(),
      "number-of-guests": formData.numberOfGuests,
      "guests-name": formData.guestName,
      "song-request": formData.songRequest && formData.songRequest.length >0?`Song request: ${formData.songRequest}`: '',
    };
    await emailjs.send(
      'service_y26k1lt',
      'template_9hptep5',
      templateParams,
      `${process.env.REACT_APP_PUBLIC_KEY}`
    );
  };
