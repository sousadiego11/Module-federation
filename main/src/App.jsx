import React, { useCallback, useState } from 'react'
import reactLogo from './images/react.png'

export const App = () => {
    const [count, setCount] = useState(0)
    console.log("🚀 ~ file: App.jsx ~ line 6 ~ App ~ count", count)

    const incrementCount = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
			<div className='wrapper'>
        <header className='header'>
            <h1>React app! {count}</h1>
            <button className='increment' onClick={incrementCount}>+</button>
        </header>
				<section>
					<img src={reactLogo} alt="react" width={200} />
				</section>
			</div>
    )
}
