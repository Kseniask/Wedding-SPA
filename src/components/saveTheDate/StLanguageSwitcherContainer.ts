import { styled } from 'styled-components';

const StLanguageSwitcherContainer = styled.div`
  padding: 10px 10px 0;
  text-align: end;
  width: 100%;
  font-size: 16px;
  button {
    border: none;
    background-color: unset;
  }

  .selected {
    font-weight: 600;
    text-decoration: underline;
  }
`;
export default StLanguageSwitcherContainer;
