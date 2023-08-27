import {
	IconPhoto,
	IconPlug,
	IconToiletPaper,
	IconToolsKitchen2,
	IconWifi,
} from "@tabler/icons"
import { useState } from "react"
import { CheckboxGroup, Label, TextField, Text } from "react-aria-components"

import Layout from "./Layout"
import { TextArea } from "../design-system/components"

const Form = () => {
	const [currentStep, setCurrentStep] = useState(0)

	return (
		<Layout>
			{/* <TextField className="mt-4">
				<h1>
					<Label className="block md:leading-normal font-serif text-gray-700 text-3xl font-bold">
						Name of Rifugio
					</Label>
				</h1>
				<Input />
			</TextField> */}

			{/* <CheckboxGroup>
				<h1>
					<Label className="block text-gray-700 md:leading-normal font-serif md:text-3xl text-2xl font-bold">
						Which of these amenities does your rifugio offer?
					</Label>
				</h1>
				<div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
					<Checkbox value="toilets">
						<IconToiletPaper />
						Toilets
					</Checkbox>
					<Checkbox value="wifi">
						<IconWifi />
						WiFi
					</Checkbox>
					<Checkbox value="restaurant">
						<IconToolsKitchen2 />
						Restaurant
					</Checkbox>
					<Checkbox value="charging">
						<IconPlug />
						Charging
					</Checkbox>
				</div>
			</CheckboxGroup> */}

			{/* <h1>
				<Label className="block text-gray-700 md:leading-normal font-serif md:text-3xl text-2xl font-bold">
					What dates are you open for bookings for over the next 12 months?
				</Label>
			</h1> */}

			{/* <TextField className="mt-4">
				<h1>
					<Label className="block md:leading-normal font-serif text-gray-700 md:text-3xl text-2xl font-bold">
						Create your description
					</Label>
				</h1>
				<Text className="text-gray-500 text-xl block mt-2" slot="description">
					Share what makes your place special.
				</Text>
				<TextArea rows={8} />
			</TextField> */}

			<div className="border-dashed border-[1px] text-gray-700 border-gray-400 p-4 rounded-md flex justify-center flex-col items-center h-80">
				<IconPhoto size={48} stroke={1} />
				<p className="font-bold text-2xl">Drag your photos here</p>
				<p className="text-lg">Choose at least 3 photos</p>
			</div>
		</Layout>
	)
}

export default Form
