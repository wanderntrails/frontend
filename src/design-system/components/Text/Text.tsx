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
	FontSize,
	Space,
	ThemeSpecification,
} from "../../theme/specification"
import Box from "../Box/Box"

type TextProps = {
	children: ReactNode
	as?: "p" | "span"
	fontSize?: FontSize
	color?: Color
	textAlign?: ResponsiveValue<CSS.Property.TextAlign>
} & Omit<HTMLAttributes<HTMLParagraphElement>, keyof CSSProperties | "style"> &
	SpaceProps<ThemeSpecification, Space | "auto" | 0>

const Text = forwardRef((props: TextProps, ref?: Ref<HTMLParagraphElement>) => {
	const { as = "p", color = "neutral.700", ...restProps } = props

	return (
		<Box
			as={as}
			fontFamily="font-family-sans-serif"
			lineHeight="line-height-text"
			color={color}
			{...restProps}
			ref={ref}
		/>
	)
})

export default Text
