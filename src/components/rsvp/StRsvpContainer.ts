import styled from "styled-components";
import { colorSystem } from "../../shared/constants";

const StRsvpContainer = styled.div`
position: relative;
height: 1200px;
top:0;

.final-image {
    width:100vw;
    opacity: 65%;
    margin: 40px 0;
}

.closing-message {
    position: absolute;
    top: 37%;
    font-family: 'AlexBrush';
    color: white;
    font-size: 5.8vw;
    left: 50%;
    transform: translate(-50%, -50%);
}
`
export default StRsvpContainer;