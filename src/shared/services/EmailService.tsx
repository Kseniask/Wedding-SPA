import emailjs from 'emailjs-com';
import { RsvpFormValues } from '../../types/RsvpFormValues';

  export const SendEmail = async (formData: RsvpFormValues) => {
    console.log(process.env.REACT_APP_PUBLIC_KEY)
    const templateParams = {
      attending: formData.attending.toLocaleUpperCase(),
      "number-of-guests": formData.numberOfGuests,
      "guests-name": formData.guestName,
      "song-request": formData.songRequest && formData.songRequest.length >0?`Song request: ${formData.songRequest}`: '',
    };
    await emailjs.send(
      'service_y26k1lt',
      'template_9hptep5',
      templateParams,
      'fb_gs85Jk9dqgj0oV'
    );
  };
