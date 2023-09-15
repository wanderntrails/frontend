import { IconChevronLeft } from "@tabler/icons"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

import { Button } from "../design-system/components"
import WandernBlue from "../map/icons/WandernBlue"

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header className="bg-white px-6 py-6 text-white md:px-12">
				<Link to="/">
					<WandernBlue />
				</Link>
			</header>

			<form className="mt-12">
				<div className="mx-6 mb-32 max-w-lg md:mx-auto">{children}</div>
				<div className="fixed bottom-0 w-full bg-white">
					<div className="flex gap-2">
						{Array.from({ length: 8 }, (_, i) => (
							<div key={i} className="h-2 flex-1 bg-gray-300" />
						))}
					</div>
					<div className="flex items-center justify-between px-6 py-5 md:px-12">
						<button className="flex items-center rounded-md px-3 py-2 text-lg font-bold text-gray-700 underline hover:bg-gray-100">
							<IconChevronLeft />
							Back
						</button>
						<Button as="button" type="submit" size="small">
							Continue
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}

export default Layout
