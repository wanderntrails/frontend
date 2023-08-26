import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"
import { MapProvider } from "./MapContext"
import theme from "./design-system/theme"
import Form from "./onboard/Form"
import HomePrelaunch from "./prelaunch/HomePrelaunch"
import PrivacyPrelaunch from "./prelaunch/PrivacyPrelaunch"

const root = createRoot(document.querySelector("#root") as HTMLElement)
root.render(
	<StrictMode>
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePrelaunch />} />
						<Route path="privacy" element={<PrivacyPrelaunch />} />
						<Route path="onboard" element={<Form />} />
						<Route
							path="map/*"
							element={
								<MapProvider>
									<App />
								</MapProvider>
							}
						/>
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</HelmetProvider>
	</StrictMode>
)
