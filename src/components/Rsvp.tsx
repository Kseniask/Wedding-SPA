import React, { useContext, useEffect, useState } from 'react';
import StRsvpContainer from './rsvp/StRsvpContainer';
import finalImage from '../images/DSC_5741.jpg';
import Branch from '../images/Branch.png';
import RsvpForm from './rsvp/RsvpForm';
import StDiv from '../shared/styled/StDiv';
import StRsvpCard from './rsvp/StRsvpCard';
import { Languages, hasRespondedKey } from '../shared/constants';
import GlobalDataContext from '../context/GlobalDataContext';
import StResponseSentMessageContainer from './rsvp/StResponseSentMessageContainer';

const Rsvp = () => {
  const [isMessageSent, setIsMessageSent] = useState(localStorage.getItem(hasRespondedKey) === 'true');
  const { themeValues, selectedLanguage } = useContext(GlobalDataContext);

  const resetHasResponded = () => {
    localStorage.setItem(hasRespondedKey, 'false');
    setIsMessageSent(false);
  };

  return (
    <StRsvpContainer height={isMessageSent || localStorage.getItem(hasRespondedKey) === 'true' ? 'auto' : '1200px'}>
      <img src={finalImage} className="final-image" alt="final" />
      <p className="closing-message">{themeValues.closingMessage}</p>
      <StRsvpCard fontSize={selectedLanguage && selectedLanguage === Languages.UA.code ? '35px' : '50px'}>
        <img src={Branch} className="branch" alt="branch" />
        {isMessageSent || localStorage.getItem(hasRespondedKey) === 'true' ? (
          <StResponseSentMessageContainer>
            <span>{themeValues.thankYou}</span>
            <br />
            {themeValues.forResponse} &hearts;
            <br />
            <button id="send-another-response" onClick={resetHasResponded}>
              {themeValues.sendAnother}
            </button>
          </StResponseSentMessageContainer>
        ) : (
          <>
            <StDiv
              className="rsvp-title"
              marginBottom="70px"
              dangerouslySetInnerHTML={{ __html: themeValues.kindlyRespond }}
            ></StDiv>
            <RsvpForm setIsMessageSent={setIsMessageSent} />
          </>
        )}
      </StRsvpCard>
    </StRsvpContainer>
  );
};

export default Rsvp;
