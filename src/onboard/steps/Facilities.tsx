import {
	IconPlug,
	IconToiletPaper,
	IconToolsKitchen2,
	IconWifi,
	TablerIcon,
} from "@tabler/icons"
import { CheckboxGroup, Label } from "react-aria-components"
import { Checkbox } from "../../design-system/components"
import { FACILITIES, Facility, StepProps } from "../formData"

const IconFacilities: { name: Facility; Icon: TablerIcon }[] = [
	{ name: "Toilets", Icon: IconToiletPaper },
	{ name: "WiFi", Icon: IconWifi },
	{ name: "Restaurant", Icon: IconToolsKitchen2 },
	{ name: "Charging", Icon: IconPlug },
]

const Facilities = ({ formData, setData }: StepProps) => {
	const setFacilities = (newFacs: string[]) =>
		setData(
			"facilities",
			newFacs.filter(
				fac => (FACILITIES as unknown as string[]).includes(fac), // hmmm
			) as Facility[],
		)

	return (
		<CheckboxGroup
			value={formData.facilities}
			onChange={setFacilities}
			isInvalid={formData.facilities.length === 0}
			isRequired
		>
			<h1>
				<Label className="block font-serif text-2xl font-bold text-gray-700 md:text-3xl md:leading-normal">
					Which of these facilities does your rifugio have?
				</Label>
			</h1>
			<div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
				{IconFacilities.map(({ name, Icon }) => (
					<Checkbox key={name} value={name}>
						<Icon />
						{name}
					</Checkbox>
				))}
			</div>
		</CheckboxGroup>
	)
}

export default Facilities
