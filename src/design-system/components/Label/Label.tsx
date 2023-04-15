import {
	CSSProperties,
	HTMLAttributes,
	ReactNode,
	Ref,
	forwardRef,
} from "react"

import Box from "../Box/Box"

type LabelProps = {
	htmlFor: string
	children: ReactNode
	hint?: string
} & Omit<HTMLAttributes<HTMLLabelElement>, keyof CSSProperties | "style">

const Label = forwardRef((props: LabelProps, ref?: Ref<HTMLLabelElement>) => {
	const { htmlFor, children, hint, ...restProps } = props
	return (
		<>
			<Box
				as="label"
				htmlFor={htmlFor}
				display="block"
				fontWeight="font-weight-bold"
				fontSize="font-size-5"
				mb="spacing-xs"
				color="neutral.800"
				ref={ref}
				{...restProps}
			>
				{children}
			</Box>
			{hint && (
				<Box
					as="span"
					id="hint-text"
					display="block"
					mb="spacing-sm"
					color="neutral.600"
					fontSize="font-size-4"
				>
					{hint}
				</Box>
			)}
		</>
	)
})

export default Label
