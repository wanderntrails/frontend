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
		<Box
			className={`sidebar ${isExpanded ? "expand" : "collapse"}`}
			display={["none", "block"]}
		>
			<Box
				as="button"
				border="none"
				sx={{ ":hover": { bg: "neutral.200" } }}
				py="spacing-md"
				px={0}
				position="absolute"
				left="100%"
				top="16px"
				color="neutral.600"
				fontSize="font-size-5"
				display="flex"
				alignItems="center"
				borderBottomRightRadius="border-radius-sm"
				borderTopRightRadius="border-radius-sm"
				cursor="pointer"
				boxShadow="shadow-map-controls"
				onClick={toggleSidebar}
				title={`${isExpanded ? "Expand" : "Collapse"} side panel`}
			>
				{isExpanded ? (
					<IconChevronLeft size={20} />
				) : (
					<IconChevronRight size={20} />
				)}
			</Box>
			<Box maxHeight="100vh">
				<Routes>
					<Route index element={<HomeSidebar />} />
					<Route path=":trail" element={<TrailSidebar />} />
				</Routes>
			</Box>
		</Box>
	)
}

export default Sidebar
