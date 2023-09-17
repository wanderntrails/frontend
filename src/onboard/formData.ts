import { useState } from "react"
import Availability from "./steps/Availability"
import Description from "./steps/Description"
import Facilities from "./steps/Facilities"
import LandingPage from "./steps/LandingPage"
import Name from "./steps/Name"
import Photos from "./steps/Photos"

export const FACILITIES = ["Toilets", "WiFi", "Restaurant", "Charging"] as const

export type Facility = (typeof FACILITIES)[number]

interface FormData {
	availability: string
	description: string
	facilities: Facility[]
	name: string
	photos: File[]
}

export type StepProps = Pick<FormProps, "formData" | "setData">

export const steps: (({ formData, setData }: StepProps) => JSX.Element)[] = [
	LandingPage,
	Name,
	Facilities,
	Availability,
	Description,
	Photos,
]

export interface FormProps {
	step: number
	nextStep: () => void
	prevStep: () => void
	formData: FormData
	setData: <K extends keyof FormData>(
		key: K,
		value: FormData[K] | ((prevValue: FormData[K]) => FormData[K]),
	) => void
}

export const useForm: () => FormProps = () => {
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
	const setData: FormProps["setData"] = (key, value) =>
		setFormData(data => ({
			...data,
			[key]: typeof value === "function" ? value(data[key]) : value,
		}))

	return { step, nextStep, prevStep, formData, setData }
}
