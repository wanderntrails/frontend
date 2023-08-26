import {
	CSSProperties,
	ComponentPropsWithoutRef,
	ReactNode,
	Ref,
	forwardRef,
} from "react"

import Box from "../Box/Box"
import {
	Size,
	Variant,
	disabledStyle,
	sizeStyles,
	variantStyles,
} from "./styles"

type ButtonProps = {
	children: ReactNode
	variant?: Variant
	size?: Size
	fullWidth?: boolean
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
	(props: ButtonProps, ref?: Ref<HTMLAnchorElement & HTMLButtonElement>) => {
		const {
			variant = "primary",
			size = "medium",
			fullWidth,
			...restProps
		} = props

		return (
			<Box
				fontSize="font-size-4"
				border="none"
				width={fullWidth ? 1 : "fit-content"}
				borderRadius="border-radius-sm"
				cursor="pointer"
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{
					...variantStyles[variant],
					...sizeStyles[size],
					...disabledStyle,
				}}
				{...restProps}
				ref={ref}
			/>
		)
	}
)

export default Button
