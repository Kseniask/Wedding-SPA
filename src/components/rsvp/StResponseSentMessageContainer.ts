import styled from 'styled-components';
import { colorSystem } from '../../shared/constants';

const StResponseSentMessageContainer = styled.div`
  height: 200px;
  font-size: 35px;
  color: ${colorSystem.defaultColorLight};
  text-align: center;
  margin-top: 15%;

  span {
    margin-left: -10%;
    font-family: 'Alex Brush', 'HandwritingCyrillic';
    font-size: 70px;
    line-height: 0;
  }

  #send-another-response {
    margin-top: 40px;
    color: #c9c0c0;
    border: none;
    background-color: unset;
    cursor: pointer;
    text-decoration: underline;
    font-size: 19px;
  }

  @media (max-width: 550px) {
    font-size: 20px;
    height: 120px;

    span {
      font-size: 40px;
    }
  }
`;
export default StResponseSentMessageContainer;
