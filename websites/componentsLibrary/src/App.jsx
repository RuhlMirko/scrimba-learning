import React from 'react'
import Badge from './Component/Badge'
import Banner from './Component/Banner'
import Cards from './Component/Cards'
import Testimonial from './Component/Testimonial'
import Tooltip from './Component/Tooltip'
import profilePicture from './assets/unsplashTestimonial.jpg'
import '../index.css'


function App() {

  return (
    <>      
      <header>
        <h1>Scrimba components library challenge</h1>  
        <p>A collection of reusable UI components built with React.</p>
      </header>

      <main>
        <section id='Badge'>
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

        <section id='banner'>
          <h2>Banners</h2>
          <p>Banners are a good additional information without hindering the content of a page. They are mostly suggestions of actions an user can take.</p>
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

        <section id='card'>
          <h2>Cards</h2>
          <p>Cards are a flexible and extensible content container. They include options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
          <p>
            The title prop accepts a <span className='params'>string</span> that will be shown as the card title.
            <br />
            The description prop accepts <span className='params'>children</span>  that will be shown as the card description.
            <br />
            The footer prop accepts a <span className='params'>string</span> that will be shown as the card footer button text. If no value is provided, it will default to <em>'Learn More'</em>.
          </p>
          <ul className='cards-container'>
            <li><Cards title='Card title'>These cards take two parameters and one children <br /><span className='params'>[ title, children, footerText]</span></Cards></li>
            <li><Cards title='Card title'>The text on these cards cut off at a certain height as to be consice and not clutter the component with too much text.
              <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea cum quaerat harum enim nemo deserunt repudiandae minus, libero dolorum tempora!</Cards></li>
          </ul>
        </section>

        <section id='testimonial'>
          <h2>Testimonials</h2>
          <p>Testimonials are a great way to showcase user feedback and build trust with potential customers.</p>
          <ul className='testimonials-container'>
            <li><Testimonial name='May Andersons' ocuppation='CEO' picture={profilePicture}>These testimonials accepts three parameters <span className='params'>[name, ocuppation, picture]</span> and one <span className='params'>children</span>.</Testimonial></li>
            <li><Testimonial name='John Doe' ocuppation='CTO'>If no picture is given as a parameter this component style will be used. These still need the rest of their parameters.</Testimonial></li>
          </ul>
        </section>

        <section id='tooltip'>
          <h2>Tooltips</h2>   
          <p>Tooltips are a common UI element used to provide additional information when users hover over or focus on an element. They are typically used to display brief descriptions or explanations of buttons, icons, or other interactive elements.</p>
          <p>This tooltip component can be customized with different positions and colors.
          <br />The accepted values for color are: <span className='params'>[ primary, secondary, info, success ]</span>
          <br />The accepted values for theme are <span className='params'>[ dark, light ]</span>
          <br />The title parameter accepts a <span className='params'>string</span> that will be shown as the tooltip title.</p>
          <ul className='tooltip-container'>
            <li >
              <Tooltip color='primary' theme='dark' title='Archive Notes'>Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ primary, dark, title ]</span></Tooltip>
              <Tooltip color='primary' theme='light'>Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ primary, light ]</span></Tooltip>
            </li>
            <li >
              <Tooltip color='secondary' theme='dark' >Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ secondary, dark ]</span></Tooltip>              
              <Tooltip color='secondary' theme='light' title='Long Title as an example'>Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ secondary, light, title ]</span></Tooltip>
            </li>
            <li >
              <Tooltip color='success' theme='dark' >Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ success, dark ]</span></Tooltip>              
              <Tooltip color='success' theme='light' title='Long Title as an example'>Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ success, light, title ]</span></Tooltip>
            </li>
            <li >
              <Tooltip color='info' theme='dark' >Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ success, dark ]</span></Tooltip>              
              <Tooltip color='info' theme='light' title='Long Title as an example'>Hover over this text to see the tooltip. <br /> Params used: <span className='params'>[ success, light, title ]</span></Tooltip>
            </li>
          </ul>

        </section>
      </main>
    </>
  )
}

export default App
