import React from 'react'
import Badge from './Component/Badge'
import '../index.css'

function App() {

  return (
    <body>      
      <header>
        <h1>Scrimba components library challenges</h1>  
      </header>

      <main>
        <section>
          <h2>Badges</h2>
          <p>These badges have either a pill or square shape. It only supports some color choices which are:</p>
          <ul className='badges-container'>
            <li><Badge color="gray" shape="square" size="small">Gray</Badge></li>
            <li><Badge color="red" shape="pill" size="medium">Red</Badge></li>
            <li><Badge color="yellow" shape="square" size="large">Yellow</Badge></li>
            <li><Badge color="green" shape="pill" size="small">Green</Badge></li>
            <li><Badge color="blue" shape="square" size="medium">Blue</Badge></li>
            <li><Badge color="indigo" shape="pill" size="large">Indigo</Badge></li>
            <li><Badge color="purple" shape="square" size="small">Purple</Badge></li>
            <li><Badge color="pink" shape="pill" size="medium">Pink</Badge></li>          
          </ul>
        </section>

      </main>
      
      
    </body>
  )
}

export default App
