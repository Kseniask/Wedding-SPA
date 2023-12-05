import { styled } from "styled-components";
interface StFlexBoxContainerProps {
    flexDirection?: string;
}

const StFlexBoxContainer = styled.div<StFlexBoxContainerProps>`
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    align-items: center;
    justify-content: center;
`;
export default StFlexBoxContainer;