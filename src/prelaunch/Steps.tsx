import { Box, Heading, Text } from "../design-system/components"

const Steps = () => (
	<>
		<Box as="section" className="bg-gray">
			<Box className="container wrapper-step">
				<Box className="text">
					<Text fontFamily="font-family-serif" className="number">
						1
					</Text>
					<Box>
						<Heading>Explore your trail</Heading>
						<Text fontSize="font-size-4">
							Explore mountain huts and campsites along on your trail. See the
							trail's stages, water sources, and resupply points.
						</Text>
						<button className="request-access">Request access</button>
					</Box>
				</Box>
				<Box className="step-1-image">
					<img
						src="/images/step/1.svg"
						alt="Preview of adding an accommodation to your itinerary and checking availability"
					/>
				</Box>
			</Box>
		</Box>

		<Box as="section" className="bg-white">
			<Box className="container wrapper-step">
				<img
					src="/images/step/2.svg"
					alt="Preview of adding an accommodation to your itinerary and checking availability"
				/>
				<Box className="text">
					<Text fontFamily="font-family-serif" className="number">
						2
					</Text>
					<Box>
						<Heading>Build your itinerary</Heading>
						<Text fontSize="font-size-4">
							Check availability and add the campsite or hut you'd like to stay
							at to your itinerary. See your trip unfold on the map.
						</Text>
						<button className="request-access">Request access</button>
					</Box>
				</Box>
			</Box>
		</Box>

		<Box as="section" className="bg-gray">
			<Box className="container wrapper-step">
				<Box className="text">
					<Text fontFamily="font-family-serif" className="number">
						3
					</Text>
					<Box>
						<Heading>Confirm and book</Heading>
						<Text fontSize="font-size-4">
							Book and pay for all the accommodation in your itinerary in one go
							without leaving the site.
						</Text>
						<button className="request-access">Request access</button>
					</Box>
				</Box>
				<img
					src="/images/step/3.svg"
					alt="Preview of adding an accommodation to your itinerary and checking availability"
				/>
			</Box>
		</Box>
	</>
)

export default Steps
