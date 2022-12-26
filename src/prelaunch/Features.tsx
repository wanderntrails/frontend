import { IconEdit, IconFileExport, IconMessages } from "@tabler/icons"

import { Box, Heading } from "../design-system/components"

const Features = () => {
	return (
		<section className="bg-dark">
			<div className="container">
				<div className="features">
					<div className="feature">
						<Box width="fit-content" mx="auto">
							<IconEdit size={48} strokeWidth="1" />
						</Box>
						<Heading size="lg" color="white" className="title" my="spacing-md">
							Manage Bookings
						</Heading>
						<p className="description">
							Message the host or add, amend, and cancel any bookings in your
							itinerary.
						</p>
					</div>
					<div className="feature">
						<Box width="fit-content" mx="auto">
							<IconMessages size={48} strokeWidth="1" />
						</Box>
						<Heading size="lg" color="white" className="title" my="spacing-md">
							Check Hikers Reviews
						</Heading>
						<p className="description">
							Read previous experiences at campsites and mountain huts from
							hikers.
						</p>
					</div>
					<div className="feature">
						<Box width="fit-content" mx="auto">
							<IconFileExport size={48} strokeWidth="1" />
						</Box>
						<Heading size="lg" color="white" className="title" my="spacing-md">
							Export Itinerary
						</Heading>
						<p className="description">
							Export your itinerary's waypoints and route for use on any offline
							map app.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
