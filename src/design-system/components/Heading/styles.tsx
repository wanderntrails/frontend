import Heading from "./Heading"

// Mapping between heading size, HTML elements, and actual font size

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
} as const

// Generate heading style and default HTML element (from h1 to h4) based on provided size

type SizeOptions = {
	size: NonNullable<React.ComponentProps<typeof Heading>["size"]>
}

export const sizeToFontSize = ({ size }: SizeOptions) => sizeMap[size].fontSize
export const sizeToElement = ({ size }: SizeOptions) => sizeMap[size].element
