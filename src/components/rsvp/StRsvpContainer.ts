import styled from 'styled-components';

interface StRsvpContainerProps {
  height?: string;
}

const StRsvpContainer = styled.div<StRsvpContainerProps>`
  position: relative;
  height: ${(props) => props.height || '1200px'};
  top: 0;

  .final-image {
    width: 100vw;
    opacity: 65%;
    margin-top: 40px;
  }

  .closing-message {
    color: #453434;
    position: absolute;
    top: 45%;
    width: max-content;
    font-family: 'Alex Brush', 'HandwritingCyrillic';
    font-size: 5.8vw;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1200px) {
    height: 90vw;
  }
`;
export default StRsvpContainer;
