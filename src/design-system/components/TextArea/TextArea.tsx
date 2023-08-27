import { Ref, forwardRef } from "react"
import {
	TextArea as AriaTextArea,
	TextAreaProps as AriaTextAreaProps,
} from "react-aria-components"

const Input = forwardRef(
	(props: AriaTextAreaProps, ref?: Ref<HTMLTextAreaElement>) => {
		return (
			<AriaTextArea
				className="mt-4 block w-full text-gray-700 rounded-md border-2 border-solid border-gray-400 p-3 text-xl hover:border-gray-500 focus:outline focus:outline-4 focus:outline-gray-300"
				{...props}
				ref={ref}
			/>
		)
	},
)

export default Input
