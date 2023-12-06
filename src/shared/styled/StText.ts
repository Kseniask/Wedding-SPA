import { styled } from "styled-components";
import { MarginProps, margin } from "styled-system";
interface StTextProps {
    letterSpacing?: string;
    fontSize?: string;
    opacity?: string;
    isLink?: boolean;
}
const StText = styled.p<MarginProps & StTextProps>`
    font-family: Lustria;
    font-size: ${(props) => props.fontSize || "30px"};
    font-weight: 100;
    margin: 8px;
    letter-spacing: ${(props) => props.letterSpacing || "0"};
    ${(props) => props.opacity ? `opacity: ${props.opacity};`: ""}
    ${(props) => props.isLink ? "cursor: pointer;" : ""}
    ${margin}
`;
export default StText;