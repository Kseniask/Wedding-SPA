import { styled } from "styled-components";

const StPinImage = styled.img`
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
        width: 60px;
        height: 60px; 
    }
`;
export default StPinImage;