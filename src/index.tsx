import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"
import { ContextProvider } from "./MapContext"
import "./application.css"
import theme from "./design-system/theme"

const root = createRoot(document.querySelector("#root") as HTMLElement)
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ContextProvider>
		</ThemeProvider>
	</StrictMode>
)
