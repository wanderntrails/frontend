import { CheckboxGroup, Label } from "react-aria-components"
import { Checkbox } from "../design-system/components"
import {
	IconPlug,
	IconToiletPaper,
	IconToolsKitchen2,
	IconWifi,
} from "@tabler/icons"

const Facilities = () => {
	return (
		<CheckboxGroup>
			<h1>
				<Label className="block font-serif text-2xl font-bold text-gray-700 md:text-3xl md:leading-normal">
					Which of these facilities does your rifugio have?
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
		</CheckboxGroup>
	)
}

export default Facilities
