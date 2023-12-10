import styled from "styled-components";
import { colorSystem } from "../../shared/constants";

const StResponseSentMessageContainer = styled.div`
    height: 200px;
    font-size: 35px;
    color: ${colorSystem.defaultColorLight};
    text-align: center;
    margin-top: 10%;

    span {
        margin-left: -10%;
        font-family: 'AlexBrush';
        font-size: 70px;
    }

    @media (max-width: 550px) {
        font-size: 20px;
        height: 120px;
        
        span {
            font-size: 40px;
        }
    }
`
export default StResponseSentMessageContainer;