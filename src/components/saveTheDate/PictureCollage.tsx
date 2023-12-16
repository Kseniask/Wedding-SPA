import React, { useEffect, useRef } from 'react';
import StFlexBoxContainer from '../../shared/styled/StFlexBoxContainer';
import image1 from '../../images/DSC_5516.jpg';
import image2 from '../../images/DSC_5697.jpg';
import image3 from '../../images/DSC_5612.jpg';

import StImage from '../../shared/styled/StImage';
import StDateCard from './StDateCard';
import StDateItem from './StDateItem';

const PictureCollage = () => {
  const dateItem1Ref = useRef<HTMLDivElement>(null);
  const dateItem2Ref = useRef<HTMLDivElement>(null);
  const dateItem3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFontSize = () => {
      if (dateItem1Ref && dateItem1Ref.current && dateItem1Ref.current.parentNode) {
        const containerWidth = (dateItem1Ref.current.parentNode as HTMLElement).offsetWidth;
        const calculatedFontSize = containerWidth * 0.4; // Adjust the multiplier as needed
        dateItem1Ref.current.style.fontSize = `${calculatedFontSize}px`;
        dateItem2Ref!.current!.style.fontSize = `${calculatedFontSize}px`;
        dateItem3Ref!.current!.style.fontSize = `${calculatedFontSize}px`;
      }
    };

    // Call the function on mount and resize
    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, []);

  return (
    <StFlexBoxContainer flexDirection="row">
      <StDateCard>
        <StImage src={image1} alt="Image 1" />
        <StDateItem ref={dateItem1Ref} right="0.7em">
          15
        </StDateItem>
      </StDateCard>
      <StDateCard>
        <StImage src={image2} alt="Image 2" />
        <StDateItem ref={dateItem2Ref}>06</StDateItem>
      </StDateCard>
      <StDateCard>
        <StImage src={image3} alt="Image 3" />
        <StDateItem ref={dateItem3Ref}>24</StDateItem>
      </StDateCard>
    </StFlexBoxContainer>
  );
};

export default PictureCollage;
