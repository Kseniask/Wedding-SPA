import React, { useContext } from "react";
import StHeader from "../../shared/styled/StHeader";
import GlobalDataContext from "../../context/GlobalDataContext";
import StCursiveText from "../../shared/styled/StCursiveText";
import Line from '../../images/Line.png';
import StImage from "../../shared/styled/StImage";
import HeartDivider from "../../images/HeartDivider.png";
import StFlexBoxContainer from "../../shared/styled/StFlexBoxContainer";
import StLineImage from "./introSection/StLineImage";
import StText from "../../shared/styled/StText";
import StDiv from "../../shared/styled/StDiv";

const IntroHeader = () => {
    const {themeValues} = useContext(GlobalDataContext);
return (
    <StFlexBoxContainer margin="50px 0">
        <StHeader marginBottom="0" letterSpacing="8px">{themeValues.brideGroomName}</StHeader>
        <StCursiveText fontSize="40px" opacity="70%">{themeValues.gettingMarried}</StCursiveText>
        <StFlexBoxContainer flexDirection="row" gap="50px" opacity="75%" height="50px !important" overflow="hidden">
            <StLineImage src={Line}/>
            <StImage src={HeartDivider} />
            <StLineImage src={Line}/>
        </StFlexBoxContainer>
        <StText letterSpacing="8px" fontSize="15px" opacity="50%" margin="16px auto">{themeValues.location}</StText>
    </StFlexBoxContainer>
)
}
export default IntroHeader;