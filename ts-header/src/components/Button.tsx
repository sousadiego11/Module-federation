import './styles/index.css'

export function Button({ onClick, render }: { 
	onClick: React.MouseEventHandler<HTMLButtonElement>
	render: string
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
