import * as CSS from "csstype"
import {
	CSSProperties,
	HTMLAttributes,
	ReactNode,
	Ref,
	forwardRef,
} from "react"
import { ResponsiveValue, SpaceProps } from "styled-system"

import { Color, Space, ThemeSpecification } from "../../theme/specification"
import Box from "../Box/Box"
import { sizeToElement, sizeToFontSize } from "./styles"

type HeadingProps = {
	children: ReactNode
	as?: "h1" | "h2" | "h3" | "h4"
	size?: "xxl" | "xl" | "lg" | "md" | "sm"
	color?: Color
	textAlign?: ResponsiveValue<CSS.Property.TextAlign>
} & Omit<HTMLAttributes<HTMLHeadingElement>, keyof CSSProperties | "style"> &
	SpaceProps<ThemeSpecification, Space | "auto" | 0>

const Heading = forwardRef(
	(props: HeadingProps, ref?: Ref<HTMLHeadingElement>) => {
		const { as, size = "xl", color = "neutral.800", ...restProps } = props

		return (
			<Box
				as={as ? as : sizeToElement({ size })}
				fontSize={sizeToFontSize({ size })}
				fontFamily="font-family-serif"
				fontWeight="font-weight-bold"
				color={color}
				{...restProps}
				ref={ref}
			/>
		)
	}
)

export default Heading
