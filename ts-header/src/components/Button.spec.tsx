import { render, fireEvent, RenderResult } from '@testing-library/react'
import { ReactNode } from 'react'
import { Button } from './Button'

type SutProps = {
	toRender: ReactNode,
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

type SutTypes = {
	sut: RenderResult
}

const makeSut = ({ toRender, onClick }: SutProps): SutTypes => {
	const sut = render(<Button render={toRender} onClick={onClick} />)

	return {
		sut
	}
}

const Stub = ({ render }: { render: string }) => {
	return <p>{render}</p>
}

describe('Button', () => {
	const onClick = jest.fn()
	
	it('Should fire function onclick', () => {
		const { sut } = makeSut({ toRender: 'Test', onClick })
	
		fireEvent.click(sut.getByText('Test'))
	
		expect(onClick).toHaveBeenCalledTimes(1)
	})
	it('Should render correct text sent in props', () => {
		const { sut } = makeSut({ onClick, toRender: 'Render test' })

		expect(sut.getByText(/render test/i)).toBeTruthy()
	})
	it('Should render child component correctly', () => {
		const { sut } = makeSut({ onClick, toRender: <Stub render='bla'/> })

		expect(sut.getByText(/bla/i)).toBeTruthy()
	})
})
