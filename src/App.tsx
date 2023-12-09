import React from 'react'
import './App.css'
import SaveTheDate from './components/SaveTheDate';
import GlobalDataProvider from './context/GlobalDataProvider';
import Location from './components/Location'
import StFlexBoxContainer from './shared/styled/StFlexBoxContainer';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';

function App () {
  return (
  <StFlexBoxContainer margin="0 auto">
    <GlobalDataProvider>
      <SaveTheDate/>
      <Location />
      <Countdown />
      <Schedule /> 
    </GlobalDataProvider>
  </StFlexBoxContainer>
  )
}

export default App
