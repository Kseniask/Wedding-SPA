import React, { useContext } from 'react';
import Language from '../../types/Language';
import StLanguageSwitcherContainer from './StLanguageSwitcherContainer';
import { Languages } from '../../shared/constants';
import GlobalDataContext from '../../context/GlobalDataContext';

const LanguageSwitcher = () => {
  const { selectedLanguage, setSelectedLanguage } = useContext(GlobalDataContext);

  const switchLanguage = (language: Language) => {
    setSelectedLanguage(language.code);
  };

  return (
    <StLanguageSwitcherContainer>
      <button
        className={selectedLanguage === Languages.EN.code ? 'selected' : ''}
        onClick={() => {
          switchLanguage(Languages.EN);
        }}
      >
        EN
      </button>
      |
      <button
        className={selectedLanguage === Languages.UA.code ? 'selected' : ''}
        onClick={() => {
          switchLanguage(Languages.UA);
        }}
      >
        УКР
      </button>
    </StLanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
