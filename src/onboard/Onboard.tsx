import {
	Box,
	Button,
	Label,
	Link,
	TextInput,
} from "../design-system/components"

const Onboard = () => {
	return (
		<>
			<Box as="header" bg="neutral.800">
				<Box
					maxWidth="960px"
					mx="auto"
					textAlign="center"
					color="white"
					fontWeight="font-weight-bold"
					fontSize="font-size-6"
					py="spacing-sm"
					fontFamily="font-family-serif"
				>
					Register your rifugio
				</Box>
			</Box>
			<Box as="main" mt="spacing-xxl" maxWidth="960px" mx="auto">
				<Box mb="spacing-xxl">
					<Link href="#">Back</Link>
				</Box>
				<Box as="form">
					<Box as="h1">
						<Label htmlFor="rifugio-name">Name of your rifugio</Label>
					</Box>
					<TextInput id="rifugio-name" />
					<Box mt="spacing-xl">
						<Button as="button" size="small">
							Continue
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Onboard
