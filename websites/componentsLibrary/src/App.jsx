import React from 'react'
import Badge from './Component/Badge'
import Banner from './Component/Banner'
import '../index.css'

function App() {

  return (
    <>      
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
          <p>Banner are a good additional information without hindering the content of a page. They are mostly suggestions of actions an user can take.</p>
          <p>
            The accepted values for color are: <span className='params'>[ success, error, warning, info ]</span>
            <br />
            The title prop accepts only a string that will be shown as the banner title.
            <br />
            The children prop accepts any valid React node that will be shown as the banner description.
          </p>
          <div className='banners-container'>
            <ul>
              <li>
                <Banner color='success' title='Congratulations!'>                
                </Banner>
              </li>
              
              <li>
                <Banner color='error' title='Error occurred'>
                </Banner>
              </li>

              <li>
                <Banner color='warning' title='Warning!'>
                Please be aware that changes you make may not be saved. You can avoid this by regularly saving your work.
                </Banner>
              </li>

              <li>
                <Banner color='info' title='Did you know?'>
                You can access additional settings in the preferences menu.
                </Banner>
              </li>
            </ul>
            <ul></ul>
          </div>
          
        </section>

      </main>
    </>
  )
}

export default App
