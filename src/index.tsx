import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"
import { ContextProvider } from "./MapContext"
import theme from "./design-system/theme"
import HomePrelaunch from "./prelaunch/HomePrelaunch"
import PrivacyPrelaunch from "./prelaunch/PrivacyPrelaunch"

const root = createRoot(document.querySelector("#root") as HTMLElement)
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<HomePrelaunch />} />
						<Route path="privacy" element={<PrivacyPrelaunch />} />
						<Route path="map/*" element={<App />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</BrowserRouter>
			</ContextProvider>
		</ThemeProvider>
	</StrictMode>
)
