import { Label, TextField } from "react-aria-components"
import { Input } from "../design-system/components"

const Name = () => {
	return (
		<TextField className="mt-4">
			<h1>
				<Label className="block font-serif text-3xl font-bold text-gray-700 md:leading-normal">
					Name of Rifugio
				</Label>
			</h1>
			<Input />
		</TextField>
	)
}

export default Name
