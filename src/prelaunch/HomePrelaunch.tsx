import { IconArrowNarrowDown, IconSend } from "@tabler/icons"

import { Box, Heading, Text } from "../design-system/components"
import Features from "./Features"
import Footer from "./Footer"
import "./stylesheets/style.css"

export default () => (
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
				<form
					id="form-request-access"
					// method="POST"
					// action="/"
				>
					{/* csrf_token */}
					<input
						type="email"
						name="email"
						autoComplete="off"
						placeholder="Email me when it's ready"
						maxLength={100}
						required
					/>
					{/* <script>
          document.querySelector('#id_email').classNames =
            "{% if inputMessage in 'error,userExists' %}shake{% endif %}"
        </script> */}
					<button type="submit" className="btn-send">
						<IconSend color="white" size={24} />
					</button>
				</form>
				{/* {% if inputMessage == "success" %}
        <p className="input-message">
          🎉 Thanks for your interest in becoming a founding user!
        </p>
      {% elif inputMessage == "userExists" %}
        <p className="input-message">👋 We already have this email on our list!</p>
      {% elif inputMessage == "error" %}
        <p className="input-message">⚠️ Oops something went wrong, please try again!</p>
      {% endif %} */}
				<IconArrowNarrowDown size={40} className="ti-arrow-narrow-down" />
			</Box>
		</Box>

		<Box as="main">
			{/* STEP 1 */}
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
			{/* STEP 2 */}
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
								Check availability and add the campsite or hut you'd like to
								stay at to your itinerary. See your trip unfold on the map.
							</Text>
							<button className="request-access">Request access</button>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* STEP 3 */}
			<Box as="section" className="bg-gray">
				<Box className="container wrapper-step">
					<Box className="text">
						<Text fontFamily="font-family-serif" className="number">
							3
						</Text>
						<Box>
							<Heading>Confirm and book</Heading>
							<Text fontSize="font-size-4">
								Book and pay for all the accommodation in your itinerary in one
								go without leaving the site.
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
			<Features />
		</Box>
		<Footer />
	</>
)
