import { Label, TextField, Text } from "react-aria-components"
import { TextArea } from "../design-system/components"

const Description = () => {
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
			<TextArea rows={8} />
		</TextField>
	)
}

export default Description
