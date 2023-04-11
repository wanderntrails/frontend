import { SystemStyleObject } from "@styled-system/css"

import { ThemedCSSSelectorObject } from "../Box/sxProps"

export type Variant = "primary" | "secondary" | "tertiary"
export type Size = "medium" | "large"

export const variantStyles: Record<
	Variant,
	SystemStyleObject | ThemedCSSSelectorObject
> = {
	primary: {
		bg: "primary.700",
		color: "white",
		textDecoration: "none",
		":hover": {
			bg: "primary.800",
		},
	},
	secondary: {
		bg: "transparent",
		borderColor: "neutral.700",
		borderWidth: "2px",
		borderStyle: "solid",
		color: "neutral.700",
		textDecoration: "none",
	},
	tertiary: {
		bg: "transparent",
		color: "neutral.700",
		textDecoration: "underline",
	},
}

export const sizeStyles: Record<
	Size,
	SystemStyleObject | ThemedCSSSelectorObject
> = {
	medium: {
		py: "spacing-sm",
		px: "spacing-md",
	},
	large: {
		py: "spacing-md",
		px: "spacing-lg",
	},
}
