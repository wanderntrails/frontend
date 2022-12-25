import React from "react"

import { TrailOverview } from "../../interfaces"

export default ({ trail }: { trail: TrailOverview }) => {
	return (
		<>
			{trail.name}
			<style type="text/css">{`
        .mapboxgl-popup-content {
          border-radius: 16px;
          background: #334155;
          color: white;
          font-size: 14px;
          padding: 8px 12px;
          filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));
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
		</>
	)
}
