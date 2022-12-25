import * as CSS from "csstype"
import { ResponsiveValue } from "styled-system"

import { FontFamily, Shadow, Space } from "../../theme/specification"

export type BoxShadowProps = {
	boxShadow?: ResponsiveValue<Shadow> | undefined
}

export type FontFamilyProps = {
	fontFamily?: ResponsiveValue<FontFamily> | undefined
}

export type GapProps = {
	gap?: ResponsiveValue<Space> | undefined
}

export type TextDecorationProps = {
	textDecoration?:
		| ResponsiveValue<
				Exclude<
					CSS.Property.TextDecoration,
					| CSS.DataType.NamedColor
					| CSS.DataType.DeprecatedSystemColor
					| "currentcolor"
				>
		  >
		| undefined
}

export type ObjectFitProps = {
	objectFit?: ResponsiveValue<CSS.Property.ObjectFit> | undefined
}

export type CursorProps = {
	cursor?: ResponsiveValue<CSS.Property.Cursor> | undefined
}
