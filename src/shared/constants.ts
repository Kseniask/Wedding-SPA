import Theme from '../types/Theme';
import questions_en from '../types/questions.json';
import questions_ua from '../types/questions-ukr.json';

export const themeEnglish: Theme = {
  saveTheDateTitleHtml: 'SAVE <span class="cursive">the</span> DATE',
  brideGroomName: 'IRYNA & VOLODYMYR',
  gettingMarried: 'are getting married',
  location: 'NEW WESTMINSTER, BC, CANADA',
  countdown: 'COUNTDOWN',
  colorPalette: 'DRESS CODE',
  formal: 'formal',
  dressCodeMessage: 'We invite guests to dress in our <br> color palette for cohesive photos',
  qna: 'Q&A',
  questions: questions_en,
  ceremony: 'Ceremony',
  celebration: 'Celebration',
  closingMessage: 'We are excited to see you!',
  kindlyRespond: '<span>Kindly</span><br/>Respond',
  yes: 'YES!',
  subTextYes: 'We can make it',
  no: 'No.',
  subTextNo: "Sorry, we can't",
  numberOfGuests: 'Number of Guests:*',
  guestNames: "Guest's Name:*",
  songRequest: 'Song Request:',
  reply: 'Reply',
  countdownHeadings: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' },
  thankYou: 'Thank you',
  forResponse: 'for your response',
  sendAnother: 'Send another one',
};

export const themeUkrainian: Theme = {
  saveTheDateTitleHtml: 'ЗБЕРЕЖІТЬ <span class="cursive">цю</span> ДАТУ',
  brideGroomName: 'ІРИНА & ВОЛОДИМИР',
  gettingMarried: 'одружуються',
  location: 'НЬЮ ВЕСТМІНСТЕР, Британська Колумбія, Канада',
  countdown: ' Залишилось ще трішки',
  colorPalette: 'ДРЕС-КОД',
  formal: 'формальний',
  dressCodeMessage: 'Будь ласка, оберіть одяг у нашій кольоровій гамі для гармонійних фотографій. Дякуємо!',
  qna: 'Запитання',
  questions: questions_ua,
  ceremony: 'Церемонія розпису',
  celebration: 'Святкування',
  closingMessage: 'З нетерпінням чекаємо на вас!',
  kindlyRespond: '<span>Будь ласка</span> <br />дайте відповідь',
  yes: 'ТАК',
  subTextYes: 'Ми зможемо',
  no: 'Ні',
  subTextNo: 'На жаль не вийде',
  numberOfGuests: 'Кількість гостей:*',
  guestNames: 'Імена гостей:*',
  songRequest: 'Обіцяю танцювати, якщо включите:',
  reply: 'Дати відповідь',
  countdownHeadings: { days: 'Днів', hours: 'Годин', minutes: 'Хвилин', seconds: 'Секунд' },
  thankYou: 'Дякуємо',
  forResponse: 'за вашу відповідь',
  sendAnother: 'Надіслати ще одну відповідь',
};

export const colorSystem = {
  defaultBackgroundColor: '#F7F3F0',
  defaultColorLight: '#968E8E',
  fontColor: '#675858',
  borderColor: '#e4e0db',
  lineColor: '#d9d9d9',
};
export const Languages = {
  UA: { code: 'ua', fullname: 'Українська' },
  EN: { code: 'en', fullname: 'English' },
};

export const hasRespondedKey = 'hasResponded';
export const selectedLanguageKey = 'selectedLanguage';
