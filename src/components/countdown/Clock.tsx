import FlipDown from '../../scripts/flipdown/FlipDown';
import React, { useContext, useEffect, useRef } from 'react'
import '../../scripts/flipdown/flipdown.css'
import StFlipdownContainer from './StFlipdownContainer';
import GlobalDataContext from '../../context/GlobalDataContext';

const Clock = () => {
  const { hasRenderedCountdown, setHasRenderedCountdown } = useContext(GlobalDataContext);

  useEffect(() => {
    if (!hasRenderedCountdown) {
      setHasRenderedCountdown(true);
      // Set up FlipDown
      new FlipDown(1718455668).start();
    }
}, [hasRenderedCountdown]);

  return (
      <StFlipdownContainer id="flipdown" className="flipdown" />
  );
};
export default Clock;
