import { styled } from "styled-components";
import { MarginProps, margin } from "styled-system";
interface StTextProps {
    letterSpacing?: string;
    fontSize?: string;
    opacity?: string;
}
const StText = styled.h1<MarginProps & StTextProps>`
    flex:1;
    font-family: Lustria;
    font-size: ${(props) => props.fontSize || "30px"};
    font-weight: 100;
    letter-spacing: ${(props) => props.letterSpacing || "6px"};
    ${(props) => props.opacity ? `opacity: ${props.opacity};`: ""}
    ${margin}
`;
export default StText;