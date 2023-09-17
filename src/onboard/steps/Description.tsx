import { Label, Text, TextField } from "react-aria-components"
import { TextArea } from "../../design-system/components"
import { StepProps } from "../formData"

const Description = ({ formData, setData }: StepProps) => {
	return (
		<TextField className="mt-4">
			<h1>
				<Label className="block font-serif text-2xl font-bold text-gray-700 md:text-3xl md:leading-normal">
					Create your description
				</Label>
			</h1>
			<Text className="mt-2 block text-xl text-gray-500" slot="description">
				Share what makes your place special.
			</Text>
			<TextArea
				rows={8}
				required
				value={formData.description}
				onChange={e => setData("description", e.target.value)}
			/>
		</TextField>
	)
}

export default Description
