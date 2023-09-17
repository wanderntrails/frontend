import { ReactNode, createContext, useContext, useState } from "react"
import Availability from "./steps/Availability"
import Description from "./steps/Description"
import Facilities from "./steps/Facilities"
import LandingPage from "./steps/LandingPage"
import Name from "./steps/Name"
import Photos from "./steps/Photos"

export const FACILITIES = ["Toilets", "WiFi", "Restaurant", "Charging"] as const

export type Facility = (typeof FACILITIES)[number]

export interface FormData {
	availability: string
	description: string
	facilities: Facility[]
	name: string
	photos: File[]
}

export type StepProps = Pick<FormContextProps, "formData" | "setData">

interface FormContextProps {
	formData: FormData
	setData: <K extends keyof FormData>(
		key: K,
		value: FormData[K] | ((prevValue: FormData[K]) => FormData[K]),
	) => void
	steps: (({ formData, setData }: StepProps) => JSX.Element)[]
	step: number
	nextStep: () => void
	prevStep: () => void
}

const FormContext = createContext<FormContextProps>({
	formData: {
		availability: "",
		description: "",
		facilities: [],
		name: "",
		photos: [],
	},
	setData: () => {
		return
	},
	steps: [],
	step: 0,
	nextStep: () => {
		return
	},
	prevStep: () => {
		return
	},
})

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const steps = [
		LandingPage,
		Name,
		Facilities,
		Availability,
		Description,
		Photos,
	]
	const [step, setStep] = useState(0)
	const prevStep = () => setStep(s => Math.max(s - 1, 0))
	const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1))

	const [formData, setFormData] = useState<FormData>({
		availability: "",
		description: "",
		facilities: [],
		name: "",
		photos: [],
	})
	const setData: FormContextProps["setData"] = (key, value) =>
		setFormData(data => ({
			...data,
			[key]: typeof value === "function" ? value(data[key]) : value,
		}))

	return (
		<FormContext.Provider
			value={{ formData, steps, step, nextStep, prevStep, setData }}
		>
			{children}
		</FormContext.Provider>
	)
}

export const useForm = () => useContext(FormContext)
