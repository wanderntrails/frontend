import { Ref, forwardRef } from "react"
import {
	Label as AriaLabel,
	LabelProps as AriaLabelProps,
} from "react-aria-components"

const Label = forwardRef(
	(props: AriaLabelProps, ref?: Ref<HTMLLabelElement>) => {
		return (
			<AriaLabel
				className="block font-serif text-3xl font-bold text-gray-700 md:leading-normal"
				{...props}
				ref={ref}
			/>
		)
	},
)

export default Label
