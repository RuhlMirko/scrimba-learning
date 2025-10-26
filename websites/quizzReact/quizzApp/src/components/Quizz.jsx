import React from "react"

function Quizz() {
    const [questions, setQuestions] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    
    React.useEffect(function() {
        console.log("Effect ran")
        const controller = new AbortController()
        
        fetch(`https://opentdb.com/api.php?amount=4&type=multiple&token=${import.meta.env.VITE_API_TOKEN}`, {
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

    if (loading) {
        return (
            <main>
                Loading questions...
            </main>
        )
    }
    
    if (error) {
        return (
            <main>
                Error: {error}
            </main>
        )
    }
    
    return (
        <main>
            Quizz Component - {questions.length} questions loaded
        </main>
    )
}   
export default Quizz