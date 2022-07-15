import { StrictMode } from 'react'
import ReactDOMClient from 'react-dom/client';
import { Header } from './components/Header'

const root = ReactDOMClient.createRoot(document.getElementById("app") as HTMLElement)

root.render(
	<StrictMode>
		<Header />
	</StrictMode>
)
