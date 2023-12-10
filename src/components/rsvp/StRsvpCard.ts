import styled from "styled-components";
import { colorSystem } from "../../shared/constants";

const StRsvpCard = styled.div`
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
        font-size: 50px;
        letter-spacing: 5px;
        color: ${colorSystem.defaultColorLight};
        line-height: 40px;
        span {
            font-family: 'AlexBrush';
            font-size: 30px;
            letter-spacing: 0;
        }
    }
`
export default StRsvpCard;