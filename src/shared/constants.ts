import Theme from "../types/Theme";
import questions_en from "../types/questions.json" 
import questions_ua from "../types/questions-ukr.json" 

export const themeEnglish: Theme = {
 saveTheDateTitleHtml: 'SAVE <span class="cursive">the</span> DATE',
 brideGroomName: "IRYNA & VOLODYMYR",
 gettingMarried: "are getting married",
 location:"NEW WESTMINSTER, BC, CANADA",
 countdown: "COUNTDOWN",
 colorPalette: "DRESS CODE",
 formal: "formal",
 dressCodeMessage: "We invite guests to dress in our <br> color palette for cohesive photos",
 qna: "Q&A",
 questions: questions_en
}

export const themeUkrainian: Theme = {
 saveTheDateTitleHtml: 'ЗБЕРЕЖИ <span class="cursive">цю</span> ДАТУ',
 brideGroomName: "ІРИНА & ВОЛОДИМИР",
 gettingMarried: "одружуються",
 location: "НЬЮ ВЕСТМІНСТЕР, Британська Колумбія, Канада",
 countdown: " Залиштлось ще трошки",
 colorPalette: "ДРЕС-КОД",
 formal: "формальний",
 dressCodeMessage: "Будь ласка, оберіть одяг у нашій кольоровій гамі для гармонійних фотографій. Дякуємо!",
 qna: "Запитання",
 questions: questions_ua
}

export const colorSystem = { defaultBackgroundColor : "#F7F3F0",
defaultColorLight: "#968E8E",
fontColor: "#675858",
borderColor: "#e4e0db",
lineColor:"#d9d9d9",
}

export const hasRespondedKey = "hasResponded";
