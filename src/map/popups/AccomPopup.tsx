import { ThemeProvider } from "styled-components"

import { Box } from "../../design-system/components"
import theme from "../../design-system/theme"
import { Accom } from "../../interfaces"

const AccomPopup = ({ accom }: { accom: Accom }) => {
	return (
		<ThemeProvider theme={theme}>
			<Box as="a" href={accom.website} target="_blank" textDecoration="none">
				<Box
					as="img"
					height="120px"
					width={1}
					objectFit="cover"
					src={accom.image}
				/>
				<Box
					as="p"
					fontSize="font-size-3"
					color="neutral.700"
					fontWeight="font-weight-bold"
					my="spacing-xs"
					mx="spacing-sm"
				>
					{accom.name}
				</Box>

				<style type="text/css">
					{`
            .mapboxgl-popup-content {
							border-radius: 16px;
              width: 240px;
              padding: 0;
              overflow: hidden;
              box-shadow: ${theme.shadows["shadow-xl"]};
            }
          `}
				</style>
			</Box>
		</ThemeProvider>
	)
}

export default AccomPopup
