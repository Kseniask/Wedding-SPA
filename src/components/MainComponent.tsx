import React, { useContext, useEffect, useMemo, useState } from 'react';
import GlobalDataContext from '../context/GlobalDataContext';
import { colorSystem, selectedLanguageKey } from '../shared/constants';
import { BeatLoader } from 'react-spinners';
import StDiv from '../shared/styled/StDiv';
import SaveTheDate from './SaveTheDate';
import Countdown from './Countdown';
import Schedule from './Schedule';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import ColorPalette from './ColorPalette';
import QnA from './QnA';
import Rsvp from './Rsvp';
import Location from './Location';
import LanguageSelectionModal from './LanguageSelectionModal';

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);
  const { selectedLanguage, setSelectedLanguage } = useContext(GlobalDataContext);
  const test = useMemo(() => localStorage.getItem(selectedLanguageKey), []);

  useEffect(() => {
    console.log('selectedLanguage', selectedLanguage);

    if (selectedLanguage) {
      setShow(false);
      console.log('setting to false');
      setIsLoading(false);
    } else if (test) {
      setSelectedLanguage(test);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [selectedLanguage, test]);

  return (
    <StFlexBoxContainer margin="0 auto">
      {isLoading ? (
        <StDiv height="100vh" position="absolute" top="50%">
          <BeatLoader color={colorSystem.lineColor} size={20} />
        </StDiv>
      ) : selectedLanguage ? (
        <>
          <SaveTheDate />
          <Location />
          <Countdown />
          <Schedule />
          <ColorPalette />
          <QnA />
          <Rsvp />
        </>
      ) : (
        <LanguageSelectionModal show={show} setShow={setShow} />
      )}
    </StFlexBoxContainer>
  );
};

export default MainComponent;
