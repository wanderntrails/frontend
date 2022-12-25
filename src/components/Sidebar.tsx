import { IconChevronLeft, IconChevronRight } from "@tabler/icons"
import { Route, Routes } from "react-router-dom"

import { Block } from "../design-system/components"
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
					<Route index element={<HomeSidebar />} />
					<Route path=":trail" element={<TrailSidebar />} />
				</Routes>
			</Block>
		</Block>
	)
}
