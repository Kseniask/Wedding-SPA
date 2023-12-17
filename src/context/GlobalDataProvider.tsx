import React, { ReactNode, useEffect, useState } from 'react';
import GlobalDataContext, { defaultGlobalDataContextValues as defaultValues } from './GlobalDataContext';
import { Languages, selectedLanguageKey, themeEnglish, themeUkrainian } from '../shared/constants';
import Theme from '../types/Theme';

interface GlobalDataProviderProps {
  children: ReactNode;
}

const GlobalDataProvider = ({ children }: GlobalDataProviderProps) => {
  const [themeValues, setThemeValues] = useState<Theme>(themeEnglish);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [hasRenderedCountdown, setHasRenderedCountdown] = useState<boolean>(defaultValues.hasRenderedCountdown);

  useEffect(() => {
    if (selectedLanguage) {
      setThemeValues(selectedLanguage === Languages.EN.code ? themeEnglish : themeUkrainian);
    } else {
      setSelectedLanguage(localStorage.getItem(selectedLanguageKey));
    }
  }, [selectedLanguage]);

  return (
    <GlobalDataContext.Provider
      value={{
        themeValues,
        hasRenderedCountdown,
        setHasRenderedCountdown,
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
