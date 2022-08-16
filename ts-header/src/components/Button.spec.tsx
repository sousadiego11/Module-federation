import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('Should fire function', () => {
	const handleClick = jest.fn()
	const component = render(<Button render='Test' onClick={handleClick} />)

	fireEvent.click(component.getByText('Test'))

	expect(handleClick).toHaveBeenCalledTimes(1)
})
