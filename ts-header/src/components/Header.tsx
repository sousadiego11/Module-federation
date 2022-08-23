import { useState } from "react"
import React from 'react'

const NamedExportedButton = React.lazy(() => import('./Button').then((module) => ({ default: module.Button })))
const DefaultExportedFooter = React.lazy(() => import('./Footer'))

export function Header(): JSX.Element {
	const [count, setCount] = useState<number>(0)

	const onLoad = async () => {
		setCount((prev) => prev + 1)

		const { makeObjects: namedTest } = await import('../utils/functions')
		const defaultTest = (await import('../utils/functions')).default

		namedTest([1,2,3])
		defaultTest()
	}
	
	return (
		<>
			<div data-testid="parent" style={{ background: '#ccd9ed', textAlign: 'center' }}>
				<h1>Olá, eu sou um componente remoto {count}</h1>
				<DefaultExportedFooter />
				<NamedExportedButton render="+" onClick={onLoad} />
			</div>
		</>
	)
}
