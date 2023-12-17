import { Modal } from 'react-bootstrap';
import { styled } from 'styled-components';
import { colorSystem } from '../../shared/constants';

const StModalBody = styled(Modal.Body)`
  display: flex;
  flex-direction: row;
  padding: 0 10%;
  color: #675858;

  .language-option-btn {
    display: flex;
    height: 60px;
    width: 100%;
    font-size: 25px;
    font-family: 'Abhaya Libre';
    border: 1px solid ${colorSystem.borderColor};
    justify-content: center;
    align-items: center;
    background-color: #f9f8f8;
    border-radius: 3px;
    margin: 30px 15px;
    cursor: pointer;
  }
`;
export default StModalBody;
