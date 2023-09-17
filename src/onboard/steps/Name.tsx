import { TextField } from "react-aria-components"
import { Input, Label } from "../../design-system/components"
import { StepProps } from "../formData"

const Name = ({ formData, setData }: StepProps) => {
	return (
		<TextField className="mt-4">
			<h1>
				<Label>Name of Rifugio</Label>
			</h1>
			<Input
				required
				value={formData.name}
				onChange={e => setData("name", e.target.value)}
			/>
		</TextField>
	)
}

export default Name
