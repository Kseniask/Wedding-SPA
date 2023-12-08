import React from "react";
import styled from "styled-components";
import { MaxHeightProps, MinWidthProps, OpacityProps, SizeProps, maxHeight, minWidth, opacity, size } from "styled-system";

export interface StImageProps {
    height?: string;
    width?: string;
    opacity?: string;
    minWidth?: string;
    maxHeight?: string;
}
const StImage = styled.img<SizeProps & StImageProps> `
    ${size}
    max-width: 100%;
    max-height: ${(props) => props.maxHeight || "100%"};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    ${(props) => props.opacity ? `opacity: ${props.opacity};` : ""}
`

export default StImage;