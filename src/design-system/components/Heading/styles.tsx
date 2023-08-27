import { ComponentProps } from "react"

import Heading from "./Heading"

const sizeMap = {
	xxl: {
		element: "h1",
		fontSize: "font-size-7",
	},
	xl: {
		element: "h2",
		fontSize: "font-size-6",
	},
	lg: {
		element: "h3",
		fontSize: "font-size-5",
	},
	md: {
		element: "h4",
		fontSize: "font-size-4",
	},
	sm: {
		element: "h5",
		fontSize: "font-size-3",
	},
} as const

type SizeOptions = {
	size: NonNullable<ComponentProps<typeof Heading>["size"]>
}

export const sizeToFontSize = ({ size }: SizeOptions) => sizeMap[size].fontSize
export const sizeToElement = ({ size }: SizeOptions) => sizeMap[size].element
