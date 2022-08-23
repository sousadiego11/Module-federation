import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useCounter } from "./useCounter"

describe('useCounter', () => {
	it('Should increment', () => {
		const { result } = renderHook(() => useCounter())

		act(() => {
			result.current.increment()
		})

		expect(result.current.count).toBe(1)
	})
})
