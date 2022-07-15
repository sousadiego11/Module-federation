import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { HeaderRemote } from './remotes/HeaderRemote'
import { App } from './App'
import './style/index.scss'

const root = ReactDom.createRoot(document.getElementById("app"))

root.render(
	<StrictMode>
		<App />
		<HeaderRemote />
	</StrictMode>
)
