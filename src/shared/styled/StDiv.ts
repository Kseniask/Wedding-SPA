import styled from 'styled-components'
import {PositionProps, BackgroundProps, position, ColorProps, SpaceProps, LayoutProps, TypographyProps, space, layout, color, background, typography, justifyContent, JustifyContentProps, FlexboxProps, flexbox} from 'styled-system'
import { colorSystem } from '../constants'

const StDiv = styled.div<PositionProps & BackgroundProps & ColorProps & SpaceProps & LayoutProps & TypographyProps & JustifyContentProps & FlexboxProps>`
  ${position}
  ${space}
  ${layout}
  ${color}
  ${background}
  ${typography}
  ${justifyContent}
  ${flexbox}
  color: ${colorSystem.fontColor};
`

export default StDiv
