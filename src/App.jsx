import React, { useCallback, useState } from 'react'
import './style/App.scss'

export const App = () => {
    const [count, setCount] = useState(0)
    console.log("🚀 ~ file: App.jsx ~ line 6 ~ App ~ count", count)

    const incrementCount = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
        <>
            <h1>React app! {count}</h1>
            <button onClick={incrementCount}>+</button>
        </>
    )
}
