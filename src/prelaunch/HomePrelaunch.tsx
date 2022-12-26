import { IconArrowNarrowDown } from "@tabler/icons"

import { Box, Heading, Text } from "../design-system/components"
import Features from "./Features"
import Footer from "./Footer"
import Form from "./Form"
import Steps from "./Steps"
import "./stylesheets/style.css"

const HomePrelaunch = () => (
	<>
		<Box as="header" className="bg-hero">
			<Box className="container">
				<Box as="img" src="/images/logo/logo.svg" className="center-logo" />
				<Heading as="h1" className="tagline">
					Plan your trail accommodation
				</Heading>
				<Text className="description" fontSize="font-size-6">
					An easy way to find and book mountain huts and campsites on popular
					hiking trails.
				</Text>
				<Form />
				<IconArrowNarrowDown size={40} className="ti-arrow-narrow-down" />
			</Box>
		</Box>
		<Box as="main">
			<Steps />
			<Features />
		</Box>
		<Footer />
	</>
)

export default HomePrelaunch
