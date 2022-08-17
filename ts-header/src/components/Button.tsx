import { ReactNode } from 'react'
import './styles/index.css'

export function Button({ onClick, render }: { 
	onClick: React.MouseEventHandler<HTMLButtonElement>
	render: ReactNode
}) {
	return (
		<>
			<button 
				className="count" 
				onClick={onClick}
			>
				{render}
			</button>
		</>
	)
}
