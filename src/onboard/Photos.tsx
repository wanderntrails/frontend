import { IconPhoto } from "@tabler/icons"
import { useState } from "react"
import { DropEvent } from "react-aria"

import {
	DropZone,
	FileTrigger,
	Button,
	FileDropItem,
	Text,
	Label,
} from "react-aria-components"

const UploadFile = () => {
	const [dropped, setDropped] = useState(false)
	const [file, setFile] = useState<string | null>(null)

	async function handleDrop(event: DropEvent) {
		const item = event.items.find(
			item =>
				item.kind === "file" &&
				(item.type === "image/jpeg" || item.type === "image/png"),
		) as FileDropItem

		if (item) {
			setFile(URL.createObjectURL(await item.getFile()))
		}
	}

	return (
		<>
			<h1>
				<Label className="block font-serif text-2xl font-bold text-gray-700 md:text-3xl md:leading-normal">
					Add some photos of your place
				</Label>
			</h1>
			<Text
				className="mb-4 mt-2 block text-xl text-gray-500"
				slot="description"
			>
				Add photos of the exterior and common areas. You will have a chance to
				upload photos of the rooms later.
			</Text>
			<DropZone
				className="group"
				onDrop={(event: DropEvent) => {
					setDropped(true)
					handleDrop(event)
				}}
			>
				<div className="flex h-80 flex-col items-center justify-center rounded-md border-[1px] border-dashed border-gray-400 p-4 text-gray-700 group-data-[drop-target]:border-2 group-data-[drop-target]:border-gray-700 group-data-[drop-target]:bg-gray-100">
					{file ? (
						<img alt="" src={file} className="h-full w-full object-contain" />
					) : (
						<>
							<IconPhoto size={48} stroke={1} />
							<p className="text-2xl font-bold">Drag your photos here</p>
							<p className="mt-2 text-gray-600">Choose at least 3 photos</p>
							<FileTrigger
								acceptedFileTypes={["png", "jpeg"]}
								allowsMultiple
								onChange={event => console.log(event)}
							>
								<Button className="mt-5 text-sm font-bold underline">
									Upload from your device
								</Button>
							</FileTrigger>
						</>
					)}
				</div>
			</DropZone>
		</>
	)
}

export default UploadFile
