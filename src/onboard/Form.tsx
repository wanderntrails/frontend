import { useState } from "react"

import Layout from "./Layout"
import Photos from "./Photos"

/*
Cover page - Get started button + no back button
Form
		- Name - string
		- Phone - string, type=tel
		- Email - string, type=email
		- Website - string, type=url
		- SocialMedia - string, type=url
		- Facilities - optional, multi select (checkboxes)
		- Availability - string
		- Description - string
		- Photos - 2-5 photos, min50KB, max10MB , JPEG or PNG
		-
*/

const Form = () => {
	const [currentStep, setCurrentStep] = useState(0)

	return (
		<Layout>
			<Photos />
		</Layout>
	)
}

export default Form
