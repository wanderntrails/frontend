import { Label } from "react-aria-components"
import { TextArea } from "../../design-system/components"
import { StepProps } from "../formData"

const Availability = ({ formData, setData }: StepProps) => {
	return (
		<>
			<h1>
				<Label className="block font-serif text-2xl font-bold text-gray-700 md:text-3xl md:leading-normal">
					What dates is your rifugio open every year?
				</Label>
			</h1>
			<TextArea
				required
				value={formData.availability}
				onChange={e => setData("availability", e.target.value)}
			/>
		</>
	)
}

export default Availability
