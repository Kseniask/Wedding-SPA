import FlipDown from '../../scripts/flipdown/FlipDown';
import React, { useEffect, useRef } from 'react'
import '../../scripts/flipdown/flipdown.css'
import StFlipdownContainer from './StFlipdownContainer';

const Clock = () => {
    const flipdownRef = useRef<FlipDown | null>(null);
    useEffect(() => {
if (!flipdownRef.current) {
    // Set up FlipDown
    flipdownRef.current = new FlipDown(1718455668)
      .start();
}
  }, []);

  return (
      <StFlipdownContainer id="flipdown" className="flipdown" />
  );
};
export default Clock;
