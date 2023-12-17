import React, { useContext } from 'react';
import StHeader from '../shared/styled/StHeader';
import GlobalDataContext from '../context/GlobalDataContext';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import Clock from './countdown/Clock';

const Countdown = () => {
  const { themeValues } = useContext(GlobalDataContext);

  return (
    <StFlexBoxContainer margin="50px 0">
      <StHeader marginBottom="30px">{themeValues.countdown}</StHeader>
      <Clock />
    </StFlexBoxContainer>
  );
};

export default Countdown;
