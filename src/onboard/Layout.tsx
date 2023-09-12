import { IconChevronLeft } from "@tabler/icons"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

import { Button } from "../design-system/components"
import WandernBlue from "../map/icons/WandernBlue"

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header className="bg-white text-white py-6 md:px-12 px-6">
				<Link to="/">
					<WandernBlue />
				</Link>
			</header>

			<form className="mt-12">
				<div className="max-w-lg md:mx-auto mx-6">
					{children}
					<div className="mt-10"></div>
				</div>
				<div className="fixed bottom-0 w-full bg-white">
					<div className="flex gap-2">
						{Array.from({ length: 8 }, (_, i) => (
							<div key={i} className="bg-gray-300 h-2 flex-1" />
						))}
					</div>
					<div className="flex justify-between items-center py-5 md:px-12 px-6">
						<button className="font-bold hover:bg-gray-100 px-3 py-2 rounded-md flex underline text-gray-700 text-lg items-center">
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
