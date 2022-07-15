import { useCallback, useState } from 'react'
import logo from './images/webpack.png'

export const App = () => {
    const [count, setCount] = useState(0)
    console.log("🚀 ~ file: App.jsx ~ line 6 ~ App ~ count", count)

    const incrementCount = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    return (
			<div className='wrapper'>
        <header className='header'>
            <h1>React app, eu sou o principal! {count}</h1>
            <button className='increment' onClick={incrementCount}>+</button>
        </header>
				<section>
					<a href='https://webpack.js.org/'>
						<img className='logo' src={logo} alt="Webpack5" width={200} />
					</a>
				</section>
			</div>
    )
}
