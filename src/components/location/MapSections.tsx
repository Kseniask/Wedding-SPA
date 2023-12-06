import React from "react";
import StFlexBoxContainer from "../../shared/styled/StFlexBoxContainer";
import StDiv from "../../shared/styled/StDiv";
import StImage from "../../shared/styled/StImage";
import WeddingVenue from "../../images/weddingVenue.png"
import StSectionPart from "./mapSection/StSectionPart";
import StText from "../../shared/styled/StText";
import Line from "../../images/Line.png"

const MapSection = () => {
return (
    <StFlexBoxContainer overflow="hidden" flexDirection="row" margin="32px">
        <StSectionPart> 
            <StDiv textAlign="center" margin="auto 0">
                <StText fontSize="18px">Ceremony</StText>
                <StText fontSize="16px">15:00</StText>
                <StText fontSize="14px">Rose Garden, Queen’s Park, New Westminster</StText>
                <StImage src={Line} width="50%" height="3px" opacity="20%"/>
                 <StText fontSize="18px">Celebration</StText>
                <StText fontSize="16px">16:00</StText>
                <StText fontSize="14px">Centennial Lodge, Queen’s Park, New Westminster</StText>
            </StDiv> </StSectionPart>
        <StSectionPart><img src={WeddingVenue} width="100%"/></StSectionPart>
    </StFlexBoxContainer>
)
}
export default MapSection;