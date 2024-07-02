
import { TypeAnimation } from 'react-type-animation';
import './App.css'
import ContactForm from './ContactForm'
import Footer from './Footer'
import MyCanvas from './Canvas'

import Logos from './Logos'



function App() {

  return (
    <>
      <div id="app">
        <div className="navbar">
          <img className='logo' src={'logo.png'} />
         
            <ul className="navbar-menu-items">
              <li>Mission</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
  
        </div>



        

        <div className="section-1">
          <MyCanvas />
          <div className="section-1-heading">
            <TypeAnimation
              sequence={[
               
                'We help organisations  keep the ball rolling.',
                1000, 
                'We help organisations keep the ball rolling.',
                1000,
                'We help organisations keep the ball rolling.',
                1000,

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
            


          </div>



        </div>



        <div className="section-2-bg">
          <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="250" data-aos-easing="ease-in-sine">Sanguine is a London-based creative incubator helping organisation leaders and investors overcome their unique obstacles.</h1>





          <div data-aos="fade-right" data-aos-duration="900" class=" services-card-container">

            <div className="services-card"><p>Branding Development</p></div>
            <div className="services-card"><p>Investor Prensen</p></div>
            <div className="services-card"><p>B2B Presentaion</p></div>
            <div className="services-card"><p>Sales Strategy</p></div>
            <div className="services-card"><p>Marketing Strategy</p></div>
            <div className="services-card"><p>Consumer Insights</p></div>
            <div className="services-card"><p>Advertising Campaigns</p></div>
            <div className="services-card"><p>Product & Service Development</p></div>

          </div>

        </div>

        <div className='section-3'>


          <Logos />


        </div>


        <div data-aos="fade-right" data-aos-duration="700" data-aos-offset="270" data-aos-easing="ease-in-sine" className='section-3'>


          <ContactForm />

        </div>

        <Footer />



      </div>
    </>
  )
}

export default App
