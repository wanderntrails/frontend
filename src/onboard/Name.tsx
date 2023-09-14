import { TextField } from "react-aria-components"
import { Input, Label } from "../design-system/components"

const Name = () => {
	return (
		<TextField className="mt-4">
			<h1>
				<Label>Name of Rifugio</Label>
			</h1>
			<Input />
		</TextField>
	)
}

export default Name
