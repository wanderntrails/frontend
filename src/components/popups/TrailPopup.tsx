import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../design-system/theme"
import { TrailOverview } from "../../interfaces"

export default ({ trail }: { trail: TrailOverview }) => {
	return (
		<ThemeProvider theme={theme}>
			{trail.name}
			<style type="text/css">{`
        .mapboxgl-popup-content {
          border-radius: 16px;
          background: ${theme.colors.neutral[700]};
          color: white;
          font-size: ${theme.fontSizes["font-size-3"]};
          padding: 8px 12px;
          box-shadow: ${theme.shadows["shadow-lg"]}
        }
        .mapboxgl-popup-anchor-top .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {
          display: none !important;
        }
        .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip,
        .mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {
          display: none !important;
        }
        .mapboxgl-popup-anchor-left .mapboxgl-popup-tip {
          display: none !important;
        }
        .mapboxgl-popup-anchor-right .mapboxgl-popup-tip {
          display: none !important;
        }
      `}</style>
		</ThemeProvider>
	)
}
