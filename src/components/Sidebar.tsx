import { IconChevronLeft, IconChevronRight } from "@tabler/icons"
import { Route, Routes } from "react-router-dom"

import { Box } from "../design-system/components"
import HomeSidebar from "./sidebar/HomeSidebar"
import TrailSidebar from "./sidebar/TrailSidebar"

const Sidebar = ({
	isExpanded,
	toggleSidebar,
}: {
	isExpanded: boolean
	toggleSidebar: () => void
}) => {
	return (
		<Box className={`sidebar ${isExpanded ? "expand" : "collapse"}`}>
			<Box
				bg="neutral.100"
				py="spacing-md"
				position="absolute"
				left="100%"
				top="8px"
				fontSize="font-size-5"
				display="flex"
				alignItems="center"
				onClick={toggleSidebar}
				title={`${isExpanded ? "Expand" : "Collapse"} side panel`}
			>
				{isExpanded ? <IconChevronLeft /> : <IconChevronRight />}
			</Box>
			<Box height="100vh" overflow="scroll">
				<Routes>
					<Route index element={<HomeSidebar />} />
					<Route path=":trail" element={<TrailSidebar />} />
				</Routes>
			</Box>
		</Box>
	)
}

export default Sidebar
