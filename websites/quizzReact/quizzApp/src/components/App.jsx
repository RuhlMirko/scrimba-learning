import { useState } from 'react'
import './styles.css'
import blob1 from '../assets/blob1.svg'
import blob2 from '../assets/blob2.svg'
// import {blob1, blob2} from '../assets/'


function App() {  

  return (
    <>
    <div className='svg-deco'>
      <img id='blob1' src={blob1} alt="Abstract organic shape in dark gray color forming a decorative background element" height="87" width="100"/>
      <img id='blob2' src={blob2} alt="Abstract organic shape in brown color forming a decorative background element" height="200" width="100"/>      
    </div>
    <main>
      <h1>Quizzical</h1>
      <p>Welcome to an interactive version of the "<a href="https://opentdb.com/">Open Trivia Database</a>". Click the button below to start a new game.</p>
      <button>Start Quizz</button>
    </main>
    </>
    
    
  )
}

export default App
