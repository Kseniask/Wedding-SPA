import Question from "./Question";

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
}