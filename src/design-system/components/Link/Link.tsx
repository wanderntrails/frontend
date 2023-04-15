import {
	CSSProperties,
	HTMLAttributes,
	ReactNode,
	Ref,
	forwardRef,
} from "react"
import { ResponsiveValue } from "styled-system"

import { FontSize } from "../../theme/specification"
import Box from "../Box/Box"

type LinkProps = {
	children: ReactNode
	href: string
	fontSize?: ResponsiveValue<FontSize>
} & Omit<HTMLAttributes<HTMLAnchorElement>, keyof CSSProperties | "style">

const Link = forwardRef((props: LinkProps, ref?: Ref<HTMLAnchorElement>) => {
	const { ...restProps } = props

	return (
		<Box
			as="a"
			color="neutral.800"
			lineHeight="line-height-text"
			textDecoration="underline"
			{...restProps}
			ref={ref}
		/>
	)
})

export default Link
