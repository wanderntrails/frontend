import { IconPhoto, IconPlus } from "@tabler/icons"
import { useState } from "react"
import { DropEvent } from "react-aria"
import bytes from "bytes"

import {
	DropZone,
	FileTrigger,
	Button,
	FileDropItem,
	Text,
	Label,
	DragTypes,
} from "react-aria-components"

const VALID_FILE_TYPES = ["image/png", "image/jpeg"]
const MIN_FILE_SIZE = 50 * 2 ** 10 // 50 KiB
const MAX_FILE_SIZE = 10 * 2 ** 20 // 10 MiB

const UploadFile = () => {
	const [files, setFiles] = useState<File[]>([])

	async function handleDrop({ items }: DropEvent) {
		const droppedItems = items.filter(
			item => item.kind === "file",
		) as FileDropItem[]

		const droppedFiles = droppedItems.map(item => item.getFile())

		Promise.all(droppedFiles).then(newFiles =>
			setFiles(files => [...files, ...newFiles]),
		)
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
				className="group relative"
				getDropOperation={(types: DragTypes) => {
					if (VALID_FILE_TYPES.every(type => types.has(type))) {
						return "copy"
					} else {
						console.log("INVALID FILE TYPE")
						return "cancel"
					}
				}}
				onDrop={handleDrop}
			>
				<div className="absolute z-10 hidden h-full w-full flex-col items-center justify-center rounded-md p-4 text-gray-700 group-data-[drop-target]:flex group-data-[drop-target]:border-2 group-data-[drop-target]:border-dashed group-data-[drop-target]:border-gray-700 group-data-[drop-target]:bg-white group-data-[drop-target]:opacity-95">
					<IconPhoto size={48} stroke={1.5} />
					<p className="text-2xl">Drop to upload</p>
				</div>
				{files.length > 0 ? (
					<>
						<div className="flex h-80 flex-col items-center justify-center rounded-md bg-gray-100 text-gray-700">
							<img
								alt=""
								src={URL.createObjectURL(files[0])}
								className="h-full w-full object-contain"
							/>
						</div>
						<p className="mt-2 text-sm text-rose-700">
							{files[0].size < MIN_FILE_SIZE &&
								`The file is too small. Please upload a photo that exceeds ${bytes(
									MIN_FILE_SIZE,
								)}.`}
							{files[0].size > MAX_FILE_SIZE &&
								`The file is too big. Please upload a photo that is less than ${bytes(
									MAX_FILE_SIZE,
								)}.`}
						</p>
						<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
							{files.slice(1).map((file, i) => (
								<div>
									<div className="flex h-60 flex-col items-center justify-center rounded-md bg-gray-100 text-gray-700">
										<img
											key={i}
											alt=""
											src={URL.createObjectURL(file)}
											className="h-full w-full object-contain"
										/>
									</div>
									<p className="mt-2 text-sm text-rose-700">
										{file.size < MIN_FILE_SIZE &&
											`The file is too small. Please upload a photo that exceeds ${bytes(
												MIN_FILE_SIZE,
											)}.`}
										{file.size > MAX_FILE_SIZE &&
											`The file is too big. Please upload a photo that is less than ${bytes(
												MAX_FILE_SIZE,
											)}.`}
									</p>
								</div>
							))}
							<FileTrigger
								acceptedFileTypes={VALID_FILE_TYPES}
								allowsMultiple
								onChange={uploadEvent =>
									setFiles(files => [
										...files,
										...Array.from(uploadEvent ?? []),
									])
								}
							>
								<Button className="flex h-60 cursor-pointer flex-col items-center justify-center rounded-md border-[1px] border-dashed border-gray-300 text-gray-700">
									<IconPlus size={32} stroke={1} />
									<p>Add more</p>
								</Button>
							</FileTrigger>
						</div>
					</>
				) : (
					<div className="flex h-80 flex-col items-center justify-center rounded-md border-[1px] border-dashed border-gray-400 p-4 text-gray-700 group-data-[drop-target]:border-2 group-data-[drop-target]:border-gray-700 group-data-[drop-target]:bg-gray-100">
						<IconPhoto size={48} stroke={1} />
						<p className="text-2xl font-bold">Drag your photos here</p>
						<p className="mt-2 text-gray-600">Choose at least 1 photo</p>
						<FileTrigger
							acceptedFileTypes={VALID_FILE_TYPES}
							allowsMultiple
							onChange={uploadEvent =>
								setFiles(files => [...files, ...Array.from(uploadEvent ?? [])])
							}
						>
							<Button className="mt-5 text-sm font-bold underline">
								Upload from your device
							</Button>
						</FileTrigger>
					</div>
				)}
			</DropZone>
		</>
	)
}

export default UploadFile
