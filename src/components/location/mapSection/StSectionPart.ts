import { styled } from "styled-components";

interface StSectionPartProp {
    overflow?: string;
    position?: string;
}
const StSectionPart = styled.div<StSectionPartProp>`
    flex:1;
    background-color: #F7F3F0;
    position:relative;
    height: 300px;
    ${(props) => props.overflow ? `overflow: ${props.overflow};` : ''}
    ${(props) => props.position ? `position: ${props.position};` : ''}

    @media (max-width: 913px){
        width: 100%;
        overflow: hidden;
    }
`;
export default StSectionPart;