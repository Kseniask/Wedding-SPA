import React, { useContext } from 'react';
import StFlexBoxContainer from '../../shared/styled/StFlexBoxContainer';
import StDiv from '../../shared/styled/StDiv';
import StImage from '../../shared/styled/StImage';
import WeddingVenue from '../../images/weddingVenue.png';
import StSectionPart from './mapSection/StSectionPart';
import StText from '../../shared/styled/StText';
import Line from '../../images/Line.png';
import StMapImage from './mapSection/StMapImage';
import StMapSectionWrapper from './mapSection/StMapSectionWrapper';
import LocationPin from '../../images/LocationPin.png';
import StPinImage from './mapSection/StPinImage';
import GlobalDataContext from '../../context/GlobalDataContext';

const ceremonyLocationLink = 'https://maps.app.goo.gl/XvKw3C6n7D8p8a5M7';
const celebrationLocationLink = 'https://maps.app.goo.gl/YepMtC5x3JvvqxcV7';

const MapSection = () => {
  const { themeValues } = useContext(GlobalDataContext);

  return (
    <StMapSectionWrapper>
      <StSectionPart>
        <StDiv textAlign="center" margin="10% 0">
          <StText fontSize="18px">{themeValues.ceremony}</StText>
          <StText fontSize="16px">15:00</StText>
          <StText fontSize="14px" onClick={() => window.open(ceremonyLocationLink, '_blank')} isLink>
            Rose Garden, Queen’s Park, New Westminster
          </StText>
          <StImage src={Line} width="50%" height="3px" opacity="20%" />
          <StText fontSize="18px">{themeValues.celebration}</StText>
          <StText fontSize="16px">16:00</StText>
          <StText fontSize="14px" onClick={() => window.open(celebrationLocationLink, '_blank')} isLink>
            Centennial Lodge, Queen’s Park, New Westminster
          </StText>
        </StDiv>
      </StSectionPart>
      <StSectionPart position="relative">
        <StMapImage src={WeddingVenue} />
        <StPinImage src={LocationPin} alt="pin" onClick={() => window.open(ceremonyLocationLink, '_blank')} />
      </StSectionPart>
    </StMapSectionWrapper>
  );
};
export default MapSection;
