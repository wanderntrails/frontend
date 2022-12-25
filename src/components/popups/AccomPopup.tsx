import React from "react"
import { ThemeProvider } from "styled-components"

import { BodyText, Image } from "../../design-system/components"
import theme from "../../design-system/theme"
import { Accom } from "../../interfaces"

export default ({ accom }: { accom: Accom }) => {
	return (
		<ThemeProvider theme={theme}>
			<a href={accom.website} target="_blank">
				<Image height="120px" objectFit="cover" src={accom.image} />
				<BodyText fontWeight="bold" my="xs" mx="sm">
					{accom.name}
				</BodyText>

				<style type="text/css">
					{`
            .mapboxgl-popup-content {
              border-radius: 16px;
              width: 240px;
              padding: 0;
              overflow: hidden;
              filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
            }
          `}
				</style>
			</a>
		</ThemeProvider>
	)
}
