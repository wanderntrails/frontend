import { IconChevronLeft } from "@tabler/icons"
import { Link } from "react-router-dom"

import { Button } from "../design-system/components"
import WandernBlue from "../map/icons/WandernBlue"
import { useForm } from "./FormContext"

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

const Layout = () => {
	const { step, steps, prevStep, nextStep, formData, setData } = useForm()

	return (
		<>
			<header className="bg-white px-6 py-6 text-white md:px-12">
				<Link to="/">
					<WandernBlue />
				</Link>
			</header>
			<form className="mt-12">
				<div className="mx-6 mb-32 max-w-lg md:mx-auto">
					{steps[step]({ formData, setData })}
				</div>
				<div className="fixed bottom-0 w-full bg-white">
					<div className="flex gap-2">
						{Array.from({ length: 8 }, (_, i) => (
							<div key={i} className="h-2 flex-1 bg-gray-300" />
						))}
					</div>
					<div className="flex items-center justify-between px-6 py-5 md:px-12">
						{step > 0 && (
							<button
								type="button"
								className="flex items-center rounded-md px-3 py-2 text-lg font-bold text-gray-700 underline hover:bg-gray-100"
								onClick={prevStep}
							>
								<IconChevronLeft />
								Back
							</button>
						)}
						<Button as="button" type="button" size="small" onClick={nextStep}>
							{step > 0 ? "Continue" : "Get started"}
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default Layout
