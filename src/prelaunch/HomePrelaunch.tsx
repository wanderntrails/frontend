import { IconArrowNarrowDown } from "@tabler/icons"
import { useRef } from "react"
import { Helmet } from "react-helmet-async"

import { Box, Button, Heading, Text } from "../design-system/components"
import Features from "./Features"
import Footer from "./Footer"
import Steps from "./Steps"
import "./stylesheets/style.css"

const HomePrelaunch = () => {
	const mainRef = useRef<HTMLDivElement | null>(null)

	const title = "Prelaunch | Wandern - Plan your trail accommodation"
	const description =
		"An easy way to find and book mountain huts and campsites on popular hiking trails. See your trail's stages, water sources and resupply points."
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="twitter:text:title" content={title} />
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
			</Helmet>
			<Box
				as="header"
				className="bg-hero"
				min-height="720px"
				height="100vh"
				display="flex"
			>
				<Box className="container">
					<Box as="img" src="/images/logo/logo.svg" className="center-logo" />
					<Heading as="h1" className="tagline">
						Plan your trail accommodation
					</Heading>
					<Text className="description" fontSize="font-size-6">
						An easy way to find and book mountain huts and campsites on popular
						hiking trails.
					</Text>
					<Box textAlign="center">
						<Button as="a" href="/map">
							Go to map
						</Button>
					</Box>
					<IconArrowNarrowDown
						size={40}
						className="ti-arrow-narrow-down"
						onClick={() =>
							mainRef.current?.scrollIntoView({
								block: "start",
								behavior: "smooth",
							})
						}
					/>
				</Box>
			</Box>
			<Box as="main" ref={mainRef}>
				<Steps />
				<Features />
			</Box>
			<Footer />
		</>
	)
}

export default HomePrelaunch
