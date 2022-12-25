import { LngLatBoundsLike, Marker } from "mapbox-gl"
import { Dispatch, SetStateAction } from "react"

export type SetState<Value> = Dispatch<SetStateAction<Value>>

export interface FilterProps {
	numStages?: number
	toggleDisplay: (type: string, setIsHidden: SetState<boolean>) => () => void
}

export interface TrailOverview {
	latitude: number
	longitude: number
	countries: string[]
	name: string
	url: string
	distance: number
	image: string
	marker?: Marker
}

export interface Accom {
	name: string
	latitude: string
	longitude: string
	website: string
	image: string
	type: string
}

export interface TrailStage {
	name: string
	latitude: string
	longitude: string
	order_number: number
	distance_from_last: number
	total_ascent_from_last: number
	total_descent_from_last: number
}

export interface Trail {
	name: string
	distance: number
	minimum_elevation: number
	maximum_elevation: number
	wild_camping_rules: string
	transport_to: string
	transport_from: string
	image: string
	countries: string[]
	accoms: Accom[]
	stages: TrailStage[]
	bbox: LngLatBoundsLike
	marker?: Marker
}
