import styled from 'styled-components';
import { colorSystem } from '../../shared/constants';

interface StRsvpCardProps {
  fontSize?: string;
}

const StRsvpCard = styled.div<StRsvpCardProps>`
  position: absolute;
  top: 50%;
  left: 15%;
  right: 15%;
  background-color: white;
  height: fit-content;
  max-width: 1200px;
  box-shadow: 0 0 4px 2px #00000040;
  padding: 40px;

  .branch {
    position: absolute;
    width: 40%;
    right: 0;
    top: 0;
  }
  .rsvp-title {
    font-size: ${(props) => props.fontSize || '50px'};
    color: ${colorSystem.defaultColorLight};
    line-height: 40px;
    font-family: Raleway;
    span {
      font-family: 'Alex Brush', 'HandwritingCyrillic';
      font-size: 30px;
    }
  }

  @media (max-width: 780px) {
    width: auto;
    left: 25px;
    right: 25px;
  }

  @media (max-width: 500px) {
    width: auto;
    left: 10px;
    right: 10px;
  }

  @media (max-width: 1150px) {
    .rsvp-form-container {
      flex-direction: column;
    }

    #radio-group {
      display: flex;
      > div {
        flex: 1;
        margin: auto;
        > div {
          width: 30px;
        }
      }
    }

    #form-group {
      margin-top: 50px;
    }

    input {
      width: 90%;
    }
  }
`;
export default StRsvpCard;
