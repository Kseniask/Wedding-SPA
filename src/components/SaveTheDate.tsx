import React, { useContext } from 'react'
import StHeader from "../shared/styled/StHeader";
import GlobalDataContext from '../context/GlobalDataContext';
import PictureCollage from './saveTheDate/PictureCollage';
import StFlexBoxContainer from '../shared/styled/StFlexBoxContainer';

const SaveTheDate = () => {
    const {themeValues} = useContext(GlobalDataContext);
    
    return (
    <>
        <StFlexBoxContainer>
            <StHeader dangerouslySetInnerHTML={{__html: themeValues.saveTheDateTitleHtml}} />
        
        <PictureCollage /></StFlexBoxContainer>
    </>

    )
} 


export default SaveTheDate;