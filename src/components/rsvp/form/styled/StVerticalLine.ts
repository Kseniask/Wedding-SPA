import styled from "styled-components";
import { colorSystem } from "../../../../shared/constants";

const StVerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30%;
  width: 2px;
  background-color: ${colorSystem.lineColor};
`;

export default StVerticalLine;