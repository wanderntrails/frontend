import { CSSProperties, ComponentPropsWithoutRef, Ref, forwardRef } from "react"

import Box from "../Box/Box"

type InputProps = Omit<
	ComponentPropsWithoutRef<"input">,
	keyof CSSProperties | "style"
>

const Input = forwardRef(
	(restProps: InputProps, ref?: Ref<HTMLInputElement>) => {
		return <Box as="input" ref={ref} {...restProps} />
	}
)

export default Input
