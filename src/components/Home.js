import React from 'react'
import './Home.css'
import contactimg from '../assets/contact-us-icon.png'

export default function Home() {
  return (
    <>
    <div className='home'>
      <div className='hero'>
          <h1>
            Dental Care <br></br>
            <span className='under'>Stay Healthy</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...

          </p>
          <div className='search'>
              <input type='text' className='searchbar' placeholder='Search treatments...'>
              </input>
              <button class="search-button">
                <i class="fa-solid fa-magnifying-glass"></i> 
              </button>
          </div>
        </div>
              <div className='info-sec'>
              <div className='info-sec-inner'>
                   <div className='home-card contact'>
                    <h2>
                    <i class="fa-regular fa-address-book"></i>
                    </h2>
                 

                    <div className='home'>
                        <h2>Contact Us</h2>
                        <p>07xxxxxxxxxx</p>
                        <p>Nairobi CBD</p>
                        <a href='#book'>Book appointment</a>
                    </div>
                  </div>



            <div className='home-card time'>
                  <h2>
                    <i class="fa-solid fa-clock"></i>
                  </h2>
              
                  <div className='home'>
                    <h2>Opening Hours</h2>
                    <p><span>8a.m-5a.m</span>Mon-Fri</p>
                    </div>
            </div>


            <div className='home-card service'>
              <h2>
                 <i class="fa-solid fa-tooth"></i>
              </h2>

              <div className='home'>
                <h2>Services</h2>
                <p>Teeth Whitening <br/> Braces <br/> Teeth replacement <br/> <a href='#Services'>Learn More</a></p>
              </div>
          
            </div>
        </div>
    </div>


        <div _ngcontent-ng-c327833444="" class="cont cont-three"></div>
        <div _ngcontent-ng-c327833445="" class="cont cont-three"></div>
        <div _ngcontent-ng-c327833446="" class="cont cont-three"></div>
        <div _ngcontent-ng-c327833447="" class="cont cont-three"></div>
        <div class="shape-container">
         <div class="cont cont-three"></div>
         </div>
        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/e_b3tCxKRCeyT_pOiwhmOw" alt="Descriptive Alt Text"/>
    </div>
    </>

    
  
  )
}
