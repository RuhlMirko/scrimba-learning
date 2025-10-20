import { useState, useRef, useEffect } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const highScore = localStorage.getItem('high-score') || 0
    const highScoreTime = localStorage.getItem('high-score-time') || 0
    const [dice, setDice] = useState(() => generateAllNewDice())
    const [rolledDices, setRolledDices] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [elapsedTime, setElapsedTime] = useState(0)
    const buttonRef = useRef(null)
    const timerRef = useRef(null)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
        
    // Focus the button when the game is won for accessibility    
    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()            
        }
    }, [gameWon])

    // Function to generate an array of 10 new dice with random values
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
    }
    
    // Start timer on first roll
    useEffect(() => {
        if (rolledDices === 1 && !startTime) {
            const start = performance.now()
            setStartTime(start)
            
            timerRef.current = setInterval(() => {
                setElapsedTime(performance.now() - start)
            }, 10) // Update every 10ms for smooth display
        }
    }, [rolledDices, startTime])

    // Stop timer when game is won
    useEffect(() => {
        if (gameWon && timerRef.current) {
            clearInterval(timerRef.current)
        }
    }, [gameWon])

    // Format time for display
    function formatTime(ms) {
        const seconds = Math.floor(ms / 1000)
        const centiseconds = Math.floor((ms % 1000) / 10)
        return `${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}s`
    }

    // Function to roll the dice and set high score if game is won
    function rollDice() {
        setRolledDices(prevCount => prevCount + 1)  
        if (!gameWon) {
            setDice(oldDice => oldDice.map(die =>
                die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            ))
        } else {
            // Reset game
            setDice(generateAllNewDice())
            if (highScore === 0 || rolledDices < highScore) {
              localStorage.setItem('high-score', rolledDices)
              localStorage.setItem('high-score-time', formatTime(elapsedTime))
            }
            setRolledDices(0)
            setStartTime(null)
            setElapsedTime(0)
            clearInterval(timerRef.current)
        }
    }

    // Function to toggle the isHeld property of a die
    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    // Creates an array of Die components to be rendered
    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. Timer starts as soon as you make a roll.</p>
            
            <div className="score">
              <h2 className="timer">{formatTime(elapsedTime)}</h2>  
              <h2>Rolled Dices: {rolledDices}</h2>            
              {highScore > 0 && <h3>Highest score: {highScore} in {highScoreTime}</h3>}
            </div>
            

            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}