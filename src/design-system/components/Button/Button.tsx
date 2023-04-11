import {
	CSSProperties,
	ComponentPropsWithoutRef,
	ReactNode,
	Ref,
	forwardRef,
} from "react"

import Box from "../Box/Box"
import { Size, Variant, sizeStyles, variantStyles } from "./styles"

type ButtonProps = {
	children: ReactNode
	variant?: Variant
	size?: Size
} & (
	| ({ as: "a" } & Omit<
			ComponentPropsWithoutRef<"a">,
			keyof CSSProperties | "style"
	  >)
	| ({ as: "button" } & Omit<
			ComponentPropsWithoutRef<"button">,
			keyof CSSProperties | "style"
	  >)
)

const Button = forwardRef(
	(props: ButtonProps, ref?: Ref<HTMLAnchorElement | HTMLButtonElement>) => {
		const { variant = "primary", size = "medium", ...restProps } = props

		return (
			<Box
				fontSize="font-size-4"
				fontWeight="font-weight-bold"
				border="none"
				display="inline-block"
				borderRadius="border-radius-md"
				cursor="pointer"
				sx={{ ...variantStyles[variant], ...sizeStyles[size] }}
				{...restProps}
				ref={ref as any}
			/>
		)
	}
)

export default Button
