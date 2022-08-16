import { render } from '@testing-library/react'
import { Button } from './Button'

test('bla', () => {
	const { getByText } = render(<Button render='a' onClick={() => {}} />)
	expect(getByText('a')).toBeTruthy()
})
