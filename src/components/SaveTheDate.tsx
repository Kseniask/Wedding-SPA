import React, { useContext } from 'react';
import StHeader from '../shared/styled/StHeader';
import GlobalDataContext from '../context/GlobalDataContext';
import PictureCollage from './saveTheDate/PictureCollage';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import LanguageSwitcher from './saveTheDate/LanguageSwitcher';
import { Languages } from '../shared/constants';

const SaveTheDate = () => {
  const { themeValues, selectedLanguage } = useContext(GlobalDataContext);

  return (
    <StFlexBoxContainer>
      <LanguageSwitcher />
      <StHeader
        dangerouslySetInnerHTML={{ __html: themeValues.saveTheDateTitleHtml }}
        fontSize={selectedLanguage === Languages.UA.code ? '21px' : undefined}
      />
      <PictureCollage />
    </StFlexBoxContainer>
  );
};

export default SaveTheDate;
