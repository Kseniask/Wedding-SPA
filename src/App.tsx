import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import GlobalDataProvider from './context/GlobalDataProvider';
import StFlexBoxContainer from './shared/styled/StFlexBoxContainer';

function App() {
  return (
    <StFlexBoxContainer margin="0 auto">
      <GlobalDataProvider>
        <MainComponent />
      </GlobalDataProvider>
    </StFlexBoxContainer>
  );
}

export default App;
