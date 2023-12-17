import React, { useContext } from 'react';
import StImage from '../shared/styled/StImage';
import colorPalette from './../images/ColorPalette.png';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import StHeader from '../shared/styled/StHeader';
import GlobalDataContext from '../context/GlobalDataContext';
import StText from '../shared/styled/StText';
import StDiv from '../shared/styled/StDiv';

const ColorPalette = () => {
  const { themeValues } = useContext(GlobalDataContext);

  return (
    <StFlexBoxContainer margin="50px 0">
      <StDiv opacity="70%" textAlign="center">
        <StHeader margin="0">{themeValues.colorPalette}</StHeader>
        <StText fontFamily="Birthstone Bounce, HandwritingCyrillic" fontSize="35px" margin="0">
          {themeValues.formal}
        </StText>
        <StText
          fontSize="20px"
          letterSpacing="2px"
          marginBottom="40px"
          dangerouslySetInnerHTML={{ __html: themeValues.dressCodeMessage }}
        />
      </StDiv>
      <StImage src={colorPalette} width="70%" />
    </StFlexBoxContainer>
  );
};

export default ColorPalette;
