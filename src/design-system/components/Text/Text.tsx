import * as CSS from "csstype"
import {
	CSSProperties,
	HTMLAttributes,
	ReactNode,
	Ref,
	forwardRef,
} from "react"
import { ResponsiveValue, SpaceProps } from "styled-system"

import {
	Color,
	FontFamily,
	FontSize,
	Space,
	ThemeSpecification,
} from "../../theme/specification"
import Box from "../Box/Box"

type TextProps = {
	children: ReactNode
	as?: "p" | "span"
	color?: Color
	bold?: boolean
	fontFamily?: FontFamily
	fontSize?: ResponsiveValue<FontSize>
	textAlign?: ResponsiveValue<CSS.Property.TextAlign>
} & Omit<HTMLAttributes<HTMLParagraphElement>, keyof CSSProperties | "style"> &
	SpaceProps<ThemeSpecification, Space | "auto" | 0>

const Text = forwardRef((props: TextProps, ref?: Ref<HTMLParagraphElement>) => {
	const { as = "p", color = "neutral.800", bold = false, ...restProps } = props

	return (
		<Box
			as={as}
			fontWeight={bold ? "font-weight-bold" : "font-weight-normal"}
			fontFamily="font-family-sans-serif"
			lineHeight="line-height-text"
			color={color}
			{...restProps}
			ref={ref}
		/>
	)
})

export default Text
