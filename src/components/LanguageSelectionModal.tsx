import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import GlobalDataContext from '../context/GlobalDataContext';
import { Languages, selectedLanguageKey } from '../shared/constants';
import Language from '../types/Language';
import StModalBody from './languageModal/StModalBody';
import StModalHeader from './languageModal/StModalHeader';
import StDiv from '../shared/styled/StDiv';

interface LanguageSelectionModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const LanguageSelectionModal = ({ show, setShow }: LanguageSelectionModalProps) => {
  const { setSelectedLanguage } = useContext(GlobalDataContext);

  const setLanguage = (language: Language) => {
    localStorage.setItem(selectedLanguageKey, language.code);
    setSelectedLanguage(language.code);
    setShow(false);
  };
  return (
    <Modal show={show} aria-labelledby="language-selection">
      <StModalHeader>
        <Modal.Title id="language-selection-title">
          Choose the language / <span style={{ fontSize: '20px' }}>Оберіть мову</span>
        </Modal.Title>
      </StModalHeader>
      <StModalBody>
        <StDiv fontSize="20px !important" className="language-option-btn" onClick={() => setLanguage(Languages.UA)}>
          {Languages.UA.fullname}
        </StDiv>
        <StDiv className="language-option-btn" onClick={() => setLanguage(Languages.EN)}>
          {Languages.EN.fullname}
        </StDiv>
      </StModalBody>
    </Modal>
  );
};

export default LanguageSelectionModal;
