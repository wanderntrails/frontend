import mapboxgl, { Map, Marker, NavigationControl } from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import {
	MutableRefObject,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"

import { SetState } from "./interfaces"

mapboxgl.accessToken =
	"pk.eyJ1IjoidmFua2hhbiIsImEiOiJja3k5NHU5aWEwMnpyMnZvY3RsdnBmNnZpIn0.IGWjLj1iDXj0Tn3_MWMNyw"

type MapMarkers = { [markerType: string]: Marker[] } | null

export const BASE_URL =
	process.env.NODE_ENV === "production" ? "https://api.wanderntrails.com" : ""

interface MapContext {
	mapContainer: MutableRefObject<HTMLDivElement | null>
	map: MutableRefObject<Map | null>
	coordinates: { lng: string; lat: string } | null
	isSatellite: boolean
	setIsSatellite: SetState<boolean>
	mapMarkers: MapMarkers
	setMapMarkers: SetState<MapMarkers>
}

const Context = createContext<MapContext>({} as MapContext)

const ContextProvider = ({ children }: { children: ReactNode }) => {
	const mapContainer = useRef<HTMLDivElement | null>(null)
	const map = useRef<Map | null>(null)

	const [coordinates, setCoordinates] =
		useState<MapContext["coordinates"]>(null)
	const [isSatellite, setIsSatellite] = useState(false)

	const [mapMarkers, setMapMarkers] = useState<MapMarkers>(null)

	useEffect(() => {
		if (map.current) return // initialize map only once
		if (!mapContainer.current) {
			console.log("mapContainer.current is not on")
			return
		}
		map.current = new Map({
			container: mapContainer.current,
			style: "mapbox://styles/vankhan/ckm5gzob32y9c17pgbw4jwcaq",
			customAttribution: `<a href="/privacy" target="_blank">© Wandern</a>`,
			center: [-16, 52],
			bearing: 0,
			pitch: 0,
			minZoom: 3.37,
			zoom: 3.37,
			maxBounds: [
				[-57.4205, 36.36677],
				[40.51238, 66.68575],
			],
		})
		map.current.addControl(
			new NavigationControl({
				visualizePitch: true,
				showZoom: false,
			}),
			"bottom-right"
		)
	})

	// get trails json
	useEffect(() => {
		map.current?.on(
			"click",
			({ lngLat: { lng, lat } }: { lngLat: { lng: number; lat: number } }) =>
				setCoordinates({ lng: lng.toFixed(5), lat: lat.toFixed(5) })
		)
	}, [])

	return (
		<Context.Provider
			value={{
				mapContainer,
				map,
				coordinates,
				isSatellite,
				setIsSatellite,
				mapMarkers,
				setMapMarkers,
			}}
		>
			{children}
		</Context.Provider>
	)
}

const useMap = () => useContext(Context)

export { ContextProvider, Context, MapContext, MapMarkers, useMap }
