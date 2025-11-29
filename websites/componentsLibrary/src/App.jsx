import React from 'react'
import Badge from './Component/Badge'
import '../index.css'

function App() {

  return (
    <body>      
      <header>
        <h1>Scrimba components library challenge</h1>  
      </header>

      <main>
        <section>
          <h2>Badges</h2>
          <p>These badges components are good for small decorative info with very little text. The default value is a grey, squared badge.</p>
          <p>The accepted values for color are: <span className='params'>[ Gray, Red, Yellow, Green, Blue, Indigo, Purple, Pink ]</span> 
            <br />The accepted values for size are: <span className='params'>[ small, medium, large ]</span> 
            <br />The accepted values for shape are: <span className='params'>[ square, pill ]</span> 
          </p>
          <ul className='badges-container'>
            <li><Badge color="gray" shape="square" size="small">Gray</Badge></li>
            <li><Badge color="red" shape="square" size="small">Red</Badge></li>
            <li><Badge color="yellow" shape="square" size="small">Yellow</Badge></li>
            <li><Badge color="green" shape="square" size="medium">Green</Badge></li>
            <li><Badge color="blue" shape="square" size="medium">Blue</Badge></li>
            <li><Badge color="indigo" shape="square" size="large">Indigo</Badge></li>
            <li><Badge color="purple" shape="square" size="large">Purple</Badge></li>
            <li><Badge color="pink" shape="square" size="large">Pink</Badge></li>          
          </ul>
          <ul className='badges-container'>
            <li><Badge color="gray" shape="pill" size="large">Gray</Badge></li>
            <li><Badge color="red" shape="pill" size="large">Red</Badge></li>
            <li><Badge color="yellow" shape="pill" size="large">Yellow</Badge></li>
            <li><Badge color="green" shape="pill" size="medium">Green</Badge></li>
            <li><Badge color="blue" shape="pill" size="medium">Blue</Badge></li>
            <li><Badge color="indigo" shape="pill" size="small">Indigo</Badge></li>
            <li><Badge color="purple" shape="pill" size="small">Purple</Badge></li>
            <li><Badge color="pink" shape="pill" size="small">Pink</Badge></li>   
          </ul>
        </section>

        <section>
          <h2>Banners</h2>
          <p>Coming soon...</p>
          <ul>
            
          </ul>
        </section>

      </main>
      
      
    </body>
  )
}

export default App
