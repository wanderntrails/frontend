import { Box, Heading, Text } from "../design-system/components"
import Footer from "./Footer"
import "./stylesheets/style.css"

const PrivacyPrelaunch = () => (
	<>
		<div className="container">
			<a href="/">
				<img src="/images/logo/logo-dark.svg" className="center-logo" />
			</a>
			<Box className="privacy">
				<Heading size="xxl">Privacy Policy</Heading>
				<Heading size="xl">Information we collect</Heading>
				<Text>We currently collect and process the following information:</Text>
				<ul>
					<li>Your email address</li>
					<li>Website user statistics</li>
				</ul>
				<Heading size="xl">
					How we get the personal information and why we have it
				</Heading>
				<Text>
					Most of the personal information we process is provided to us directly
					by you for one of the following reasons:
				</Text>
				<ul>
					<li>
						You provided your email address directly through our website to
						register interest in Wandern's service.
					</li>
				</ul>
				<br />
				<Text>
					We also receive personal information indirectly, from the following
					sources in the following scenarios:
				</Text>
				<ul>
					<li>
						We use analytics software such as Google Analytics on our website to
						help us analyse the traffic on our website. For more information on{" "}
						<u>
							<a
								href="https://policies.google.com/technologies/partner-sites"
								target="_blank"
							>
								Google Analytics' processing of Personal Data.
							</a>
						</u>
					</li>
					<li>
						We use cookies to make interactions with our website easy and
						meaningful. When you visit our website, our servers may send a
						cookie to your computer. Standing alone, cookies do not personally
						identify you; they merely recognize your web browser. Please note
						that if you disable your web browser's ability to accept cookies,
						you will be able to navigate our website.
					</li>
				</ul>
				<br />
				<Text>We use the information that you have given us in order to</Text>
				<ul>
					<li>
						To communicate with you in connection with the website,
						notifications, services or offerings that you may have registered
						for;
					</li>
					<li>To send you updates;</li>
					<li>
						For research and development relating to the website and the
						services we provide to you.
					</li>
				</ul>
				<br />
				<Text>
					Under the General Data Protection Regulation (GDPR), the lawful bases
					we rely on for processing this information are:
				</Text>
				<ul>
					<li>
						Your consent. You are able to remove your consent at any time. You
						can do this by contacting{" "}
						<u>
							<a href="mailto:hello@wanderntrails.com" target="_blank">
								hello@wanderntrails.com
							</a>
						</u>
					</li>
				</ul>
				<Heading size="xl">How we store your personal information</Heading>
				<Text>
					Your information is securely stored on Airtable and Mailchimp. We keep
					your email address for 5 years. We will then dispose your information
					by permanently deleting both databases in which your email is stored.
				</Text>
				<br />
				<Heading>Your data protection rights</Heading>
				<Text>Under data protection law, you have rights including:</Text>
				<br />
				<ul>
					<li>
						<strong>Your right of access</strong> - You have the right to ask us
						for copies of your personal information.
					</li>
					<li>
						<strong>Your right to rectification</strong> - You have the right to
						ask us to rectify personal information you think is inaccurate. You
						also have the right to ask us to complete information you think is
						incomplete.
					</li>
					<li>
						<strong>Your right to erasure</strong> - You have the right to ask
						us to erase your personal information in certain circumstances.
					</li>
					<li>
						<strong>Your right to restriction of processing</strong> - You have
						the right to ask us to restrict the processing of your personal
						information in certain circumstances.
					</li>
					<li>
						<strong>Your right to object to processing</strong> - You have the
						the right to object to the processing of your personal information
						in certain circumstances.
					</li>
					<li>
						<strong>Your right to data portability</strong> - You have the right
						to ask that we transfer the personal information you gave us to
						another organisation, or to you, in certain circumstances.
					</li>
				</ul>
				<br />
				<Text>
					You are not required to pay any charge for exercising your rights. If
					you make a request, we have one month to respond to you. Please
					contact us at{" "}
					<a href="mailto:hello@wanderntrails.com" target="_blank">
						hello@wanderntrails.com
					</a>
					if you wish to make a request.
				</Text>
				<Heading>How to complain</Heading>
				<Text>
					If you have any concerns about our use of your personal information,
					you can make a complaint to us at{" "}
					<u>
						<a href="mailto:hello@wanderntrails.com" target="_blank">
							hello@wanderntrails.com
						</a>
					</u>
				</Text>
			</Box>
		</div>
		<Footer />
	</>
)

export default PrivacyPrelaunch
