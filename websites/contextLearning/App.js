import React from "react"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge: set up the context again on your own!
 */

const ThemeContext = React.createContext()

export default function App() {
    return (
        <ThemeContext.Provider value='light'>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }