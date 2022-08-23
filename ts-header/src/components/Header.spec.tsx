import '@testing-library/jest-dom'
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import { Header } from './Header'

type SutTypes = {
	sut: RenderResult
}

const makeSut = (): SutTypes => {
	const sut = render(<Header />)

	return {
		sut
	}
}

describe('Button', () => {
	it('Should render header parent', async () => {
		const { sut } = makeSut()
		const element = await waitFor(() => sut.getByTestId('parent'))
	
		expect(element).toBeInTheDocument()
	})
	it('Should render parent with default 0 count', async () => {
		const { sut } = makeSut()
		const element = await waitFor(() => sut.getByText('Olá, eu sou um componente remoto 0'))
	
		expect(element).toBeInTheDocument()
	})
	it('Should render button child', async () => {
		const { sut } = makeSut()
		const button = await waitFor(() => sut.getByText('+'))

		expect(button).toBeInTheDocument()
	})
	it('Should render footer child', async () => {
		const { sut } = makeSut()
		const footer = await waitFor(() => sut.getByText('Footer'))

		expect(footer).toBeInTheDocument()
	})
	it('Should increment count on click', async () => {
		const { sut } = makeSut()
		const button = await waitFor(() => sut.getByText('+'))
		fireEvent.click(button)
		
		const element = sut.getByText('Olá, eu sou um componente remoto 1')
	
		expect(element).toBeTruthy()
	})
})
