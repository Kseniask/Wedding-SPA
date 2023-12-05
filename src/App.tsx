import React from 'react'
import './App.css'
import StDiv from './shared/styled/StDiv'
import SaveTheDate from './components/SaveTheDate';
import GlobalDataProvider from './context/GlobalDataProvider';
import Location from './components/Location'
import StFlexBoxContainer from './shared/styled/StFlexBoxContainer';

function App () {
  return (
  <StFlexBoxContainer margin="0 auto">
    <GlobalDataProvider>
      <SaveTheDate/>
      <Location />
    </GlobalDataProvider>
  </StFlexBoxContainer>
  )
}

export default App
