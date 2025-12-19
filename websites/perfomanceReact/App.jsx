import React from "react"
import GrandParent from "./GrandParent"

export default function App() {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("[GP] [P] [C] [GC] APP just rendered")
    return (
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <p>App component</p>
            <GrandParent />
            <GrandParent />
        </div>
    )
}
