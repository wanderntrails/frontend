import { Ref, forwardRef } from "react"
import {
	Checkbox as AriaCheckbox,
	CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"

const Checkbox = forwardRef(
	(props: AriaCheckboxProps, ref?: Ref<HTMLInputElement>) => {
		return (
			<AriaCheckbox
				className="py-4 cursor-pointer font-bold text-gray-700 md:text-lg text-md hover:bg-gray-50 data-[selected]:bg-gray-100 rounded-md items-center outline-gray-300 outline-1 data-[selected]:outline-2 data-[selected]:outline-gray-700 outline flex flex-col"
				{...props}
				ref={ref}
			/>
		)
	},
)

export default Checkbox
