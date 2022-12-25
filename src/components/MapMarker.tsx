import { Marker, Popup } from "mapbox-gl"
import React from "react"
import { renderToString } from "react-dom/server"
import { NavigateFunction } from "react-router-dom"

import { MapContext } from "../MapContext"
import { Accom, TrailOverview, TrailStage } from "../interfaces"
import AccomPopup from "./popups/AccomPopup"
import TrailPopup from "./popups/TrailPopup"
import TrailstagePopup from "./popups/TrailstagePopup"

const resetMarkers = (setMapMarkers: MapContext["setMapMarkers"]): void => {
	setMapMarkers(mapMarkers => {
		if (mapMarkers)
			Object.values(mapMarkers).forEach(typeMarkers => {
				typeMarkers.forEach(marker => marker.remove())
			})
		return null
	})
}

const TrailMarker = (
	trail: TrailOverview,
	map: MapContext["map"],
	navigate: NavigateFunction
): Marker => {
	// let markerIcon = (
	//   <img
	//     className="marker marker-trail"
	//     src="/svg/map-markers/trail.svg"
	//   />
	// )
	let markerIcon = document.createElement("img")
	markerIcon.src = "/svg/map-markers/trail.svg"
	markerIcon.className = "marker marker-trail"

	let marker = new Marker(markerIcon)
		.setLngLat([trail.longitude, trail.latitude])
		.setPopup(
			new Popup({
				className: "popup-trail",
				offset: 24,
				focusAfterOpen: false,
				closeButton: false,
			}).setHTML(renderToString(<TrailPopup trail={trail} />))
		)

	marker.getElement().addEventListener("mouseenter", () => {
		// show popup (remove then toggle it on)
		//@ts-ignore
		marker.togglePopup()._popup.remove()
		marker.togglePopup()
		// show the actual trail line layer on map
		map.current?.setLayoutProperty(trail.url, "visibility", "visible")
	})
	marker.getElement().addEventListener("mouseleave", () => {
		// remove popup
		//@ts-ignore
		marker.togglePopup()._popup.remove()
		// hide the actual trail line layer on map
		map.current?.setLayoutProperty(trail.url, "visibility", "none")
	})
	marker.getElement().addEventListener("click", () => {
		map.current?.setLayoutProperty(trail.url, "visibility", "visible")
		navigate(`/map/${trail.url}`)
	})
	return marker
}

const StageMarker = (stage: TrailStage, numStages: number): Marker => {
	let markerIcon
	if (stage.order_number === numStages - 1) {
		markerIcon = document.createElement("img")
		markerIcon.src = "/svg/map-markers/trailstage-end.svg"
		markerIcon.className = "marker marker-trailstage end"
	} else {
		markerIcon = document.createElement("div")
		markerIcon.className = "marker marker-trailstage"
		if (stage.order_number > 0) {
			markerIcon.textContent = stage.order_number.toString()
		} else {
			markerIcon.className += " start"
		}
	}
	let marker = new Marker(markerIcon)
		.setLngLat([parseFloat(stage.longitude), parseFloat(stage.latitude)])
		.setPopup(
			new Popup({
				className: "popup-trailstage",
				offset: 12,
				focusAfterOpen: false,
				closeButton: false,
			}).setHTML(
				renderToString(
					<TrailstagePopup
						trailstage={stage}
						isFinishStage={stage.order_number === numStages - 1}
					/>
				)
			)
		)
	return marker
}

const AccomMarker = (accom: Accom): Marker => {
	let markerIcon = document.createElement("img")
	markerIcon.className = "marker marker-accom"
	markerIcon.src = `/svg/map-markers/${accom.type}.svg`

	let marker = new Marker(markerIcon)
		.setLngLat([parseFloat(accom.longitude), parseFloat(accom.latitude)])
		.setPopup(
			new Popup({
				className: "popup-accom",
				offset: 24,
				focusAfterOpen: false,
				closeButton: false,
			}).setHTML(renderToString(<AccomPopup accom={accom} />))
		)
	marker.getElement().addEventListener("click", () => {
		// TODO: when popup clicked, open accom's overview
	})
	return marker
}

export { resetMarkers, TrailMarker, StageMarker, AccomMarker }
