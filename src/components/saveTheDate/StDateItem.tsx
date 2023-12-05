import { styled } from "styled-components";
import { PositionProps, position } from "styled-system";

const StDateItem = styled.div<PositionProps>`
    position: absolute;
    bottom: 0;
    right: 0.5em;
    color: white;
    line-height: 60%;
    font-family: PurplePurse;
    font-size: 8em;
    ${position}
`;
export default StDateItem;