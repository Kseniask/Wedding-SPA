import React from "react";
import styled from "styled-components";
import { MaxHeightProps, MinWidthProps, SizeProps, maxHeight, minWidth, size } from "styled-system";

const StImage = styled.img<SizeProps & MaxHeightProps & MinWidthProps > `
    ${size}
    ${maxHeight}
    ${minWidth}
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`

export default StImage;