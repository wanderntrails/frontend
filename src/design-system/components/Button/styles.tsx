import { SystemStyleObject } from "@styled-system/css"

import { ThemedCSSSelectorObject } from "../Box/sxProps"

export type Variant = "primary" | "secondary" | "tertiary"

export const variantStyles: Record<
	Variant,
	SystemStyleObject | ThemedCSSSelectorObject
> = {
	primary: {
		bg: "orange.700",
		color: "white",
		textDecoration: "none",
		boxShadow: "shadow-lg",
		":hover": {
			bg: "orange.800",
			boxShadow: "none",
		},
	},
	secondary: {
		bg: "transparent",
		boxShadow: "0 0 0 1px",
		color: "neutral.700",
		textDecoration: "none",
		":hover": {
			bg: "neutral.200",
			boxShadow: "0 0 0 2px",
		},
	},
	tertiary: {
		bg: "transparent",
		color: "neutral.700",
		textDecoration: "underline",
		fontWeight: "font-weight-bold",
	},
}

export type Size = "small" | "medium"

export const sizeStyles: Record<
	Size,
	SystemStyleObject | ThemedCSSSelectorObject
> = {
	small: {
		py: "spacing-xs",
		px: "spacing-sm",
	},
	medium: {
		py: "spacing-sm",
		px: "spacing-lg",
		fontWeight: "font-weight-bold",
	},
}

export const disabledStyle: SystemStyleObject | ThemedCSSSelectorObject = {
	":disabled": {
		opacity: 0.5,
		cursor: "auto",
	},
}
