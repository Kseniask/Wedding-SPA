import React from 'react'
import './App.css'
import StDiv from './shared/styled/StDiv'
import SaveTheDate from './components/SaveTheDate';
import GlobalDataProvider from './context/GlobalDataProvider';

function App () {
  return (
  <StDiv display="flex" justifyContent="center">
    <GlobalDataProvider>
      <SaveTheDate/>
    </GlobalDataProvider>
  </StDiv>
  )
}

export default App
