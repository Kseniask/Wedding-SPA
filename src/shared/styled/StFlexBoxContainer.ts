import { styled } from "styled-components";
import { FlexProps, MarginProps, OverflowProps, flex, margin, overflow } from "styled-system";
interface StFlexBoxContainerProps {
    flexDirection?: string;
    gap?: string;
    opacity?: string;
    height?: string;
}

const StFlexBoxContainer = styled.div<StFlexBoxContainerProps & MarginProps & OverflowProps>`
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-direction: ${(props) => props.flexDirection || 'column'};
    align-items: center;
    justify-content: center;
    ${props => props.gap? `gap: ${props.gap};` : ""}
    ${props => props.opacity ? `opacity: ${props.opacity};`: ""}
    ${props => props.height ? `height: ${props.height};`: ""}

    ${margin}
    ${overflow}
`;
export default StFlexBoxContainer;