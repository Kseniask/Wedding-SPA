import { styled } from "styled-components";

const StDateCard = styled.div`
    position: relative;
    margin: 16px;
    flex: 1;
    transition: flex 0.5s;

    @media (max-width: 1300px) {
      margin: 10px;  
    }
        
    @media (max-width: 600px) {
      margin: 5px;  
    }
`;
export default StDateCard;