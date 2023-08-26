import { IconChevronLeft } from "@tabler/icons"
import { Input, Label, TextField } from "react-aria-components"

import { Button } from "../design-system/components"
import WandernLogoFull from "../map/icons/WandernLogoFull"

const Onboard = () => {
	return (
		<>
			<div>
				<header className="bg-gray-700 text-white py-8">
					<div className="max-w-[900px] mx-auto items-center">
						<div className="absolute top-3">
							<WandernLogoFull />
						</div>
						<p className="font-serif text-center text-lg">
							Onboard your rifugio
						</p>
					</div>
				</header>
				<div className="flex w-full gap-2 mb-12">
					{Array.from({ length: 8 }, (_, i) => (
						<div key={i} className="bg-gray-200 h-2 flex-1" />
					))}
				</div>

				<div className="mt-6 max-w-sm md:mx-auto mx-6">
					<button className="flex underline text-gray-700 text-lg items-center">
						<IconChevronLeft />
						Back
					</button>
					<main className="mt-12">
						<form>
							<TextField className="mt-4 mb-8">
								<h1>
									<Label className="block text-gray-700 text-4xl font-serif font-bold">
										Name of Rifugio
									</Label>
								</h1>
								<Input className="mt-4 block w-full rounded-md border-2 border-solid border-gray-400 p-3 text-xl hover:border-gray-500 focus:outline focus:outline-4 focus:outline-gray-300" />
							</TextField>
							<Button as="button" type="submit" size="small">
								Continue
							</Button>
						</form>
					</main>
				</div>
			</div>
		</>
	)
}

export default Onboard
