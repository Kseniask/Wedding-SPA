import React, { useState } from 'react'
import StRsvpContainer from './rsvp/StRsvpContainer';
import finalImage from "../images/DSC_5741.jpg"
import Branch from "../images/Branch.png"
import RsvpForm from './rsvp/RsvpForm';
import StDiv from '../shared/styled/StDiv';
import StRsvpCard from './rsvp/StRsvpCard';
import { hasRespondedKey } from '../shared/constants';
import ResponseSentMessage from './rsvp/ResponseSentMessage';

const Rsvp = () => {
const [isMessageSent, setIsMessageSent] = useState(false);
  return (
    <StRsvpContainer height={isMessageSent || localStorage.getItem(hasRespondedKey) === 'true' ? "auto": "1200px"}>
        <img src={finalImage} className="final-image" alt="final"/>
        <p className="closing-message">We are excited to see you!</p>
        <StRsvpCard >
            <img src={Branch} className="branch" alt="branch" />
            {isMessageSent || localStorage.getItem(hasRespondedKey) === 'true' ? <ResponseSentMessage /> : (
            <>
              <StDiv className='rsvp-title' marginBottom="70px"><span>Kindly</span><br/>Respond</StDiv>
              <RsvpForm setIsMessageSent={setIsMessageSent}/>
            </>)}
        </StRsvpCard>
    </StRsvpContainer>
  )
}

export default Rsvp