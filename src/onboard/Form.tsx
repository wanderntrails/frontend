import { useState } from "react"

import Layout from "./Layout"

import Photos from "./Photos"

/*
Cover page - Get started button + no back button
Form
		- Name - string Rifugio Averau
		- Facilities - optional, multi select (checkboxes)
		- Availability - string
		- Description - string
		- Photos - 1-5 photos, min50KB, max10MB , JPEG or PNG

		Submit

		----> DASHBOARD <-----
*/

const Form = () => {
	const [currentStep, setCurrentStep] = useState(0)

	type Facility = "Toilets" | "WiFi" | "Restaurant" | "Charging"

	interface FormData {
		name: string
		facilities: Facility[]
		availability: string
		description: string
	}

	return (
		<Layout>
			<Photos />
		</Layout>
	)
}

export default Form
