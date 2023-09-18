import { IconPhoto, IconPlus, IconTrash } from "@tabler/icons-react"
import bytes from "bytes"
import { DropEvent } from "react-aria"

import {
	Button,
	DragTypes,
	DropZone,
	FileDropItem,
	FileTrigger,
	Label,
	Text,
} from "react-aria-components"
import { StepProps } from "../formData"

const VALID_FILE_TYPES = ["image/png", "image/jpeg"]
const MIN_FILE_SIZE = 50 * 2 ** 10 // 50 KiB
const MAX_FILE_SIZE = 10 * 2 ** 20 // 10 MiB

const UploadFile = ({ formData: { photos }, setData }: StepProps) => {
	function handleDrop({ items }: DropEvent) {
		const droppedItems = items.filter(
			item => item.kind === "file" && VALID_FILE_TYPES.includes(item.type),
		) as FileDropItem[]

		const droppedPhotos = droppedItems.map(item => item.getFile())

		Promise.all(droppedPhotos).then(newPhotos =>
			setData("photos", photos => [...photos, ...newPhotos]),
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
					if (VALID_FILE_TYPES.some(type => types.has(type))) {
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
				{photos.length > 0 ? (
					<>
						<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
							{photos.map((file, fileIndex) => (
								<div
									key={fileIndex}
									className={`${fileIndex === 0 && "md:col-span-2"}`}
								>
									<div
										className={`relative flex ${
											fileIndex === 0 ? "h-80" : "h-60"
										} flex-col items-center justify-center rounded-md bg-gray-100 text-gray-700`}
									>
										<Button
											className="absolute right-4 top-4 cursor-pointer rounded-full bg-white p-2 shadow-lg"
											onPress={() =>
												setData("photos", photos =>
													photos.filter((_, i) => i !== fileIndex),
												)
											}
										>
											<IconTrash size={18} />
										</Button>
										<img
											key={fileIndex}
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
									setData("photos", photos => [
										...photos,
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
								setData("photos", photos => [
									...photos,
									...Array.from(uploadEvent ?? []),
								])
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
