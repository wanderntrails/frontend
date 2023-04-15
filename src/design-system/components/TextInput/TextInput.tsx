import { CSSProperties, ComponentPropsWithoutRef, Ref, forwardRef } from "react"

import Box from "../Box/Box"

type InputProps = {
	width?: string
} & Omit<ComponentPropsWithoutRef<"input">, keyof CSSProperties | "style">

const TextInput = forwardRef(
	(props: InputProps, ref?: Ref<HTMLInputElement>) => {
		const { width, ...restProps } = props

		return (
			<Box
				as="input"
				width={width}
				p="spacing-xxs"
				fontSize="font-size-4"
				borderRadius="border-radius-sm"
				borderStyle="solid"
				borderWidth={2}
				borderColor="neutral.700"
				color="neutral.800"
				ref={ref}
				{...restProps}
			/>
		)
	}
)

export default TextInput
