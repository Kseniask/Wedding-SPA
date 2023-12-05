import React from "react";
import styled from "styled-components";
import { MaxHeightProps, MinWidthProps, SizeProps, maxHeight, minWidth, size } from "styled-system";
import StImage from "../../../shared/styled/StImage";

const StLineImage = styled(StImage) `
    position: relative;
    bottom: -10px;
    height: 2.5px;
    width: 190px;
    opacity: 60%;
`

export default StLineImage;