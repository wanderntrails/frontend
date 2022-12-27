import { IconArrowNarrowDown } from "@tabler/icons"
import { useRef } from "react"

import { Box, Heading, Text } from "../design-system/components"
import Features from "./Features"
import Footer from "./Footer"
import Form from "./Form"
import Steps from "./Steps"
import "./stylesheets/style.css"

const HomePrelaunch = () => {
	const heroRef = useRef<HTMLDivElement | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const mainRef = useRef<HTMLDivElement | null>(null)

	return (
		<>
			<Box as="header" className="bg-hero" ref={heroRef}>
				<Box className="container">
					<Box as="img" src="/images/logo/logo.svg" className="center-logo" />
					<Heading as="h1" className="tagline">
						Plan your trail accommodation
					</Heading>
					<Text className="description" fontSize="font-size-6">
						An easy way to find and book mountain huts and campsites on popular
						hiking trails.
					</Text>
					<Form inputRef={inputRef} />
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
				<Steps {...{ heroRef, inputRef }} />
				<Features />
			</Box>
			<Footer />
		</>
	)
}

export default HomePrelaunch
