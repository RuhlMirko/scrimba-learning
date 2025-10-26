import React from "react"

function Quizz() {
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://opentdb.com/api.php?amount=10&token=${import.meta.env.VITE_API_TOKEN}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <main>
            Quizz Component
        </main>
    )
}   
export default Quizz