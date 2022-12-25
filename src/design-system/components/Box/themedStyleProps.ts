import {
	BackgroundProps,
	BorderColorProps,
	BorderProps,
	BorderRadiusProps,
	BorderStyleProps,
	BorderWidthProps,
	ColorProps,
	FlexboxProps,
	FontSizeProps,
	FontWeightProps,
	GridProps,
	LayoutProps,
	LineHeightProps,
	PositionProps,
	SpaceProps,
	TypographyProps,
} from "styled-system"

import {
	BorderRadius,
	Color,
	FontSize,
	FontWeight,
	LineHeight,
	Space,
	ThemeSpecification,
} from "../../theme/specification"
import {
	BoxShadowProps,
	CursorProps,
	FontFamilyProps,
	GapProps,
	ObjectFitProps,
	PointerEventsProps,
	TextDecorationProps,
} from "./systemProps"

type ThemedStyleProps = SpaceProps<ThemeSpecification, Space | "auto" | 0> &
	BorderRadiusProps<ThemeSpecification, BorderRadius | 0> &
	ColorProps<ThemeSpecification, Color> &
	FontSizeProps<ThemeSpecification, FontSize> &
	LineHeightProps<ThemeSpecification, LineHeight> &
	FontWeightProps<ThemeSpecification, FontWeight> &
	BorderColorProps<ThemeSpecification, Color> &
	FontFamilyProps &
	BorderWidthProps &
	BorderStyleProps &
	BorderProps &
	BoxShadowProps &
	BackgroundProps &
	FlexboxProps &
	GridProps &
	PositionProps &
	LayoutProps &
	TypographyProps &
	GapProps &
	TextDecorationProps &
	CursorProps &
	ObjectFitProps &
	PointerEventsProps

export default ThemedStyleProps
