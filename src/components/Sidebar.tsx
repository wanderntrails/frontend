import { IconChevronLeft, IconChevronRight } from "@tabler/icons"
import React from "react"
import { Route, Routes } from "react-router-dom"

import { Block } from "../design-system/components"
import { SetState } from "../interfaces"
import HomeSidebar from "./sidebar/HomeSidebar"
import TrailSidebar from "./sidebar/TrailSidebar"

export default ({
	isExpanded,
	toggleSidebar,
}: {
	isExpanded: boolean
	toggleSidebar: () => void
}) => {
	return (
		<Block className={`sidebar ${isExpanded ? "expand" : "collapse"}`}>
			<Block
				className="sidebar-toggle"
				onClick={toggleSidebar}
				title={`${isExpanded ? "Expand" : "Collapse"} side panel`}
			>
				{isExpanded ? <IconChevronLeft /> : <IconChevronRight />}
			</Block>
			<Block height="100vh" overflow="scroll">
				<Routes>
					<Route path="/map" element={<HomeSidebar />} />
					<Route path="/map/:trail" element={<TrailSidebar />} />
				</Routes>
			</Block>
		</Block>
	)
}
