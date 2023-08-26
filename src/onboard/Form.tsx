import { Input, Label, TextField } from "react-aria-components"

import Layout from "./Layout"

const Form = () => {
	return (
		<Layout>
			<TextField className="mt-4 mb-8">
				<h1>
					<Label className="block text-gray-700 text-4xl font-serif font-bold">
						Name of Rifugio
					</Label>
				</h1>
				<Input className="mt-4 block w-full rounded-md border-2 border-solid border-gray-400 p-3 text-xl hover:border-gray-500 focus:outline focus:outline-4 focus:outline-gray-300" />
			</TextField>
		</Layout>
	)
}

export default Form
