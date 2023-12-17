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

  #radio-group > div {
    > div {
      margin-top: 6px;
    }
  }

  #form-group {
    font-size: 25px;

    input {
      margin-left: 20px;
    }
  }

  @media (max-width: 780px) {
    width: auto;
    left: 25px;
    right: 25px;
  }

  @media (max-width: 500px) {
    width: 97%;
    left: 10px;
    right: 10px;
    padding: 20px;

    #radio-group > div {
      margin: 0;
      label {
        font-size: 20px;

        span {
          font-size: 25px;
        }
      }
      > div {
        width: 20px;
      }
    }
  }

  @media (max-width: 1150px) {
    .rsvp-form-container {
      flex-direction: column;
    }

    #form-group input {
      width: 90%;
    }

    #radio-group {
      display: flex;
      > div {
        height: 100%;
        flex: 1;

        > div {
          width: 30px;
        }
      }
    }

    #form-group {
      margin-top: 50px;
    }
  }
`;
export default StRsvpCard;
