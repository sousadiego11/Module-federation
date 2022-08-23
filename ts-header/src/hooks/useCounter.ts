import { useCallback, useState } from "react"

export const useCounter = () => {
	const [count, setCount] = useState<number>(0)

	const increment = useCallback(() => setCount(count + 1), [])

	return { count, increment }
}
