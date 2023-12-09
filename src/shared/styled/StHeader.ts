import { styled } from "styled-components";
import { MarginProps, margin } from "styled-system";
interface StHeaderProps {
    letterSpacing?: string;
}
const StHeader = styled.h1<MarginProps & StHeaderProps>`
    flex:1;
    font-family: Lustria;
    font-size: 27px;
    font-weight: 100;
    letter-spacing: ${(props) => props.letterSpacing || "6px"};
    
    .cursive {
        font-family: BirthstoneBounce;
        letter-spacing: 2px;
        font-size: 40px;
    }
    ${margin}
`;
export default StHeader;