import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import GlobalDataContext from '../context/GlobalDataContext';
import { Languages, selectedLanguageKey } from '../shared/constants';
import Language from '../types/Language';
import StModalBody from './languageModal/StModalBody';
import StModalHeader from './languageModal/StModalHeader';

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
        <Modal.Title id="language-selection-title">Choose the language / Оберіть мову</Modal.Title>
      </StModalHeader>
      <StModalBody>
        <div className="language-option-btn" onClick={() => setLanguage(Languages.UA)}>
          {Languages.UA.fullname}
        </div>
        <div className="language-option-btn" onClick={() => setLanguage(Languages.EN)}>
          {Languages.EN.fullname}
        </div>
      </StModalBody>
    </Modal>
  );
};

export default LanguageSelectionModal;
