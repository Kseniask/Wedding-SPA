import Question from './Question';

export default interface Theme {
  saveTheDateTitleHtml: string;
  brideGroomName: string;
  gettingMarried: string;
  location: string;
  countdown: string;
  colorPalette: string;
  formal: string;
  dressCodeMessage: string;
  qna: string;
  questions: Question[];
  ceremony: string;
  celebration: string;
  closingMessage: string;
  kindlyRespond: string;
  yes: string;
  subTextYes: string;
  no: string;
  subTextNo: string;
  numberOfGuests: string;
  guestNames: string;
  songRequest: string;
  reply: string;
  countdownHeadings: CountdownHeadings;
}

interface CountdownHeadings {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
