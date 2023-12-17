import { styled } from 'styled-components';
import { colorSystem } from '../../shared/constants';

const StQnAContainer = styled.div`
  width: 70%;
  min-height: 100px;
  height: fit-content;
  text-align: center;
  font-family: Lustria, Raleway;
  letter-spacing: 1px;
  padding: 0 30px;

  .accordion-item-container {
    margin: 20px 0;
  }

  .accordion-question {
    font-size: 20px;
    cursor: pointer;
  }

  .accordion-answer {
    margin: 20px 0;
  }

  .active {
    font-weight: 600;
  }

  hr {
    border: 1px solid ${colorSystem.borderColor};
    margin: 20px 0;
    width: 50%;
    margin: 20px auto;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export default StQnAContainer;
