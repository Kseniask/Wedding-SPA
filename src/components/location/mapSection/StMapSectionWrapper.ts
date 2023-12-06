import { styled } from "styled-components";

const StMapSectionWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: row; 
    margin: 32px;

    @media (max-width: 913px) {
        flex-direction: column;
    }
`;
export default StMapSectionWrapper;