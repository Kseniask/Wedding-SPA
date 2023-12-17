import React, { useContext } from 'react';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import scheduleCard from '../images/scheduleCard.png';
import scheduleCardUa from '../images/scheduleCardUa.png';

import GlobalDataContext from '../context/GlobalDataContext';
import StScheduleImage from './schedule/StScheduleImage';
import { Languages } from '../shared/constants';

const Schedule = () => {
  const { selectedLanguage } = useContext(GlobalDataContext);

  return (
    <StFlexBoxContainer maxWidth="500px">
      <StScheduleImage
        src={selectedLanguage === Languages.UA.code ? scheduleCardUa : scheduleCard}
        alt="schedule"
        style={{ width: '100%' }}
      />
    </StFlexBoxContainer>
  );
};

export default Schedule;
