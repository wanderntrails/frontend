import css, { SystemStyleObject } from '@styled-system/css'

import ThemedStyleProps from './themedStyleProps'

export type ThemedCSSSelectorObject = {
  [cssSelector: string]: ThemedStyleProps
}

export interface SxProps {
  sx?: SystemStyleObject | ThemedCSSSelectorObject
}

const sx = ({ sx }: SxProps) => css(sx)

export default sx
