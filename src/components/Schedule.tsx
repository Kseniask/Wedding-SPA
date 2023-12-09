import React, { useContext } from 'react'
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';
import scheduleCard from '../images/scheduleCard.png'
import GlobalDataContext from '../context/GlobalDataContext';
import StScheduleImage from './schedule/StScheduleImage';

const Schedule = () => {
    const {themeValues} = useContext(GlobalDataContext);
    
    return (
        <StFlexBoxContainer maxWidth="500px">
            <StScheduleImage src={scheduleCard} alt="schedule" style={{width: "100%" }} /> 
        </StFlexBoxContainer>
    )
} 

export default Schedule;