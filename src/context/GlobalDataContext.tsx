import React from 'react';
import Theme from '../types/Theme';
import { themeEnglish } from '../shared/constants';

export interface GlobalDataState {
  themeValues: Theme;
  hasRenderedCountdown: boolean;
  setHasRenderedCountdown: (hasRendered: boolean) => void;
  selectedLanguage: string | null;
  setSelectedLanguage: (lang: string) => void;
}
const notFoundCallback = () => {
  throw new Error('Connot find global data provider in the parent tree');
};
export const defaultGlobalDataContextValues = {
  themeValues: themeEnglish,
  hasRenderedCountdown: false,
  setHasRenderedCountdown: notFoundCallback,
  selectedLanguage: null,
  setSelectedLanguage: notFoundCallback,
};

export default React.createContext<GlobalDataState>({
  ...defaultGlobalDataContextValues,
});
