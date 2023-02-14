import { props } from "@styled-system/should-forward-prop"
import styled from "styled-components"
import {
	background,
	border,
	color,
	compose,
	flexbox,
	grid,
	layout,
	position,
	shadow,
	space,
	system,
	typography,
} from "styled-system"

import sx, { SxProps } from "./sxProps"
import ThemedStyleProps from "./themedStyleProps"

const SystemStyleProps = compose(
	background,
	border,
	color,
	flexbox,
	grid,
	layout,
	position,
	space,
	shadow,
	typography
)

const Box = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) =>
		!props.includes(prop) && defaultValidatorFn(prop),
})<ThemedStyleProps & SxProps>(
	SystemStyleProps,
	sx,
	system({
		cursor: true,
		textDecoration: true,
		objectFit: true,
		pointerEvents: true,
		textTransform: true,
		transform: true,
		listStyle: true,
		gap: {
			property: "gap",
			scale: "space",
		},
	})
)

export default Box
