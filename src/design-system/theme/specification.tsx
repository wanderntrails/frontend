export type ThemeSpecification = {
	colors: Record<ColorFamily, Record<ColorScale, string>>
	fonts: Record<FontFamily, string>
	fontSizes: Record<FontSize, string>
	fontWeights: Record<FontWeight, number>
	lineHeights: Record<LineHeight, number>
	space: Record<Space, string | number>
	shadows: Record<Shadow, string>
	radii: Record<BorderRadius, string | number>
}

type ColorFamily = "neutral" | "primary" | "green" | "yellow" | "red" | "blue"

type ColorScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800

export type Color =
	| `${ColorFamily}.${ColorScale}`
	| "white"
	| "inherit"
	| "transparent"

export type FontFamily = `font-family-${"sans-serif" | "serif"}`

export type FontSize = `font-size-${1 | 2 | 3 | 4 | 5 | 6 | 7}`

export type FontWeight = `font-weight-${"normal" | "bold"}`

export type LineHeight = `line-height-${"reset" | "heading" | "text"}`

export type Space = `spacing-${
	| "xxs"
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "xxl"}`

export type Shadow = `shadow-${"sm" | "md" | "lg" | "xl"}`

export type BorderRadius = `border-radius-${
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "circle"
	| "pill"}`
