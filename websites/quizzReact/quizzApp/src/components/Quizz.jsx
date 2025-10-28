import React from "react"
import he from "he"

function Quizz() {
    const [questions, setQuestions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    

    function getNewQuestions() {
        React.useEffect(function() {
            console.log("Render")
            const controller = new AbortController()
            
            fetch(`https://opentdb.com/api.php?amount=4&type=multiple`, {
                signal: controller.signal
            })
                .then(res => res.json())
                .then(data => {
                    console.log("API Response:", data)
                    if (data.results && Array.isArray(data.results)) {
                        setQuestions(data.results)
                    } else {
                        setError("Failed to load questions")
                    }
                    setLoading(false)
                })
                .catch(err => {
                    if (err.name !== 'AbortError') {
                        console.error("Fetch error:", err)
                        setError("Network error")
                        setLoading(false)
                    }
                })
            
            return () => controller.abort() // Cleanup function
        }, [])
    }

    getNewQuestions()

    if (loading) {
        return (
            <main>
                <h2>Loading questions...</h2>
            </main>
        )
    }
    
    if (error) {
        return (
            <main>
                <h2>Error: {error}</h2>
            </main>
        )
    }

    console.log("Questions loaded:", questions)
    const questionsElements = questions.map((questionObj, index) => {
        // Combine correct and incorrect answers randomly
        const allAnswers = [...questionObj.incorrect_answers]
        const randomIndex = Math.floor(Math.random() * (allAnswers.length + 1))
        allAnswers.splice(randomIndex, 0, questionObj.correct_answer)
        
        const answerElements = allAnswers.map((answer, answerIndex) => (
                        <label key={answerIndex} className="answer-label">
                            <input 
                                type="radio"
                                name={`question-${index}`}
                                value={he.decode(answer)}
                            />
                            {he.decode(answer)}
                        </label>
                    ))
        
        return (
            <div key={index} className="question-container">            
                <h3>{he.decode(questionObj.question)}</h3>
                <div className="answers">
                    {answerElements}
                </div>
            </div>
        )
    })
    return (
        <main>
            {questionsElements}
            <button id="check-answers-btn">Check Answers</button>
        </main>
    )
}   
export default Quizz