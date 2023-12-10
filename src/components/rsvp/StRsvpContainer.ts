import styled from "styled-components";

interface StRsvpContainerProps {
    height?: string;
}

const StRsvpContainer = styled.div<StRsvpContainerProps>`
position: relative;
height: ${props => props.height || "1200px"};
top:0;

.final-image {
    width:100vw;
    opacity: 65%;
    margin-top: 40px;
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