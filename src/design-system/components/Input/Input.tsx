import { Ref, forwardRef } from "react"
import {
	Input as AriaInput,
	InputProps as AriaInputProps,
} from "react-aria-components"

const Input = forwardRef(
	(props: AriaInputProps, ref?: Ref<HTMLInputElement>) => {
		return (
			<AriaInput
				className="mt-4 block w-full rounded-md border-2 border-solid border-gray-400 p-3 text-xl hover:border-gray-500 focus:outline focus:outline-4 focus:outline-gray-300"
				{...props}
				ref={ref}
			/>
		)
	},
)

export default Input
