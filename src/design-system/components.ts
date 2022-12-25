import styled, { StyledComponent } from "styled-components"
import {
	background,
	border,
	color,
	flexbox,
	layout,
	position,
	shadow,
	space,
	system,
	typography,
} from "styled-system"

export const Block: StyledComponent<"div", any, any> = styled("div")(
	position,
	typography,
	flexbox,
	space,
	layout,
	color,
	shadow,
	border,
	system({
		cursor: true,
	})
)

export const Image: StyledComponent<"img", any, any> = styled("img")(
	{ display: "block", width: "100%" },
	typography,
	flexbox,
	space,
	layout,
	color,
	border,
	system({
		objectFit: true,
	})
)

export const H1: StyledComponent<"h1", any, any> = styled("h1")(
	{ fontSize: "20px", fontFamily: "Source Sans Pro" },
	typography,
	space,
	layout,
	color
)

export const H2: StyledComponent<"h2", any, any> = styled("h2")(
	{ fontSize: "18px", fontFamily: "Source Sans Pro" },
	typography,
	space,
	layout,
	color
)

export const BodyText: StyledComponent<"p", any, any> = styled("p")(
	{ fontSize: "16px", fontFamily: "Source Sans Pro", lineHeight: "140%" },
	typography,
	space,
	layout,
	color
)

export const SmallBodyText: StyledComponent<"p", any, any> = styled("p")(
	{ fontSize: "14px", fontFamily: "Source Sans Pro" },
	typography,
	space,
	layout,
	color
)

export const Card = styled("div")({
	borderRadius: "8px",
	margin: "16px",
	padding: "16px",
	background: "#F8FAFC",
	boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
})

export const MarkerTrailStage: StyledComponent<"div", any, any> = styled("div")(
	{
		height: "24px",
		width: "24px",
		borderRadius: "50%",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "14px",
		boxShadow:
			"0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
	},
	color,
	background
)
