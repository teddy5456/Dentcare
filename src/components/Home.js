import React, { useRef } from 'react';
import './Home.css';
import whitening from '../assets/tooth-whitening.png'
import orthodontic from '../assets/braces.png'
import implants from '../assets/dental-implant.png'
import jaw from '../assets/jaw.png'
import surgery from '../assets/dental-surgery.png'
import replacement from '../assets/restoration (1).png'
import Book from './Book';
import contactimg from '../assets/contact-us-icon.png';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export default function Home() {
  const servicesRef = useRef(null);
  const openInMaps = () => {
    window.open('https://www.google.com/maps/place/Dentplan+Dental+Surgeons/@-1.2829039953655699,36.81318207768147,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d3c3c3e2e9:0x6a9053d10aac5e1!8m2!3d-1.2829039953655699!4d36.81537076568147!16s%2Fg%2F11b6w1wm5g', '_blank');
  }

  const scrollLeft = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <div id='home'>
      <div className='home'>
        <div className='hero'>
          <h1>
            Dental Care <br />
            <span className='under'>Stay Healthy</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          <div className='search'>
            <input type='text' className='searchbar' placeholder='Search treatments...' />
            <button className='search-button'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
          <img src="https://ideogram.ai/assets/progressive-image/balanced/response/e_b3tCxKRCeyT_pOiwhmOw" alt="Descriptive Alt Text" />
        </div>

        <div className='info-sec'>
          <div className='info-sec-inner'>
            <div className='home-card contact'>
              <h2><i className='fa-regular fa-address-book'></i></h2>
              <div className='home1'>
                <h2>Contact Us</h2>
                <p>+254 720 285946<br /><span className='timer'>Koinange street</span>, Nairobi</p>
                <a href='#book'>Book appointment</a>
              </div>
            </div>

            <div className='home-card time'>
              <h2><i className='fa-solid fa-clock'></i></h2>
              <div className='home1'>
                <h2>Opening Hours</h2>
                <p><span className='timer'>8a.m-5p.m</span> Mon-Fri</p>
              </div>
            </div>

            <div className='home-card service'>
              <h2><i className='fa-solid fa-tooth'></i></h2>
              <div className='home1'>
                <h2>Services</h2>
                <ul>
                  <li>Teeth Whitening</li>
                  <li>Braces</li>
                  <li><a href='#services'>Learn More</a></li>
                </ul>
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
      
    </div>

        {/* Services Section */}
        <div className='services' id='services'>
        <div className='label1'>
           <h3>Services</h3>
          </div>
          <div className='cta-home'>
             <h2>Our Team of Dentists provides a variety of dental services:</h2>
             <button className='appointment'>Book an Appointment</button>
          </div>

          <button className='scroll-button left' onClick={scrollLeft}>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
          <button className='scroll-button right' onClick={scrollRight}>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
          <div className='services-list'>

            <div className='service-item'>
              <div className='serv-icons'><img src={whitening} ></img>
              </div>
              <div className='serv-info'>
              <h3>Teeth Whitening</h3>
              <p>Brighten your smile with our advanced teeth whitening treatments.</p>
              <div classname='attribute'>Icon made by <a href="https://www.flaticon.com/authors/kerismaker" title="kerismaker"> kerismaker </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
              </div>
            </div>
            <div className='service-item'>
              <div className='serv-icons'><img src={orthodontic} ></img>
              </div>
              <div className='serv-info'>
                      <h3>Braces - Orthodontics Treatment</h3>
                      <p>Get a perfect smile with our orthodontic treatments and braces.</p>
                      <div classname='attribute'>Icon made by <a href="https://www.flaticon.com/free-icons/braces" title="braces icons"> Maan Icons - Flaticon</a></div>
              </div>
            </div>
            <div className='service-item'>
              <div className='serv-icons'><img src={implants} ></img>
              </div>
              <div className='serv-info'>
                      <h3>Dental Implants</h3>
                      <p>Replace missing teeth with our high-quality dental implants.</p>
                      <div> Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"> Eucalyp </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    </div>
            </div>
            <div className='service-item'>
              <div className='serv-icons'><img src={jaw} ></img>
              </div>
              <div className='serv-info'>
                      <h3>Bone Grafting</h3>
                      <p>Strengthen and rebuild bone structure with our bone grafting procedures.</p>
                      <div> Icons made by <a href="https://www.flaticon.com/authors/victoruler" title="Victoruler"> Victoruler </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    </div>
            </div>
            <div className='service-item'>
              <div className='serv-icons'><img src={surgery} ></img>
              </div>
              <div className='serv-info'>
                      <h3>Gum Treatment and Surgeries</h3>
                      <p>Address gum issues with our specialized treatments and surgeries.</p>
                      <div> Icons made by <a href="https://www.flaticon.com/authors/victoruler" title="Victoruler"> Victoruler </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    </div>
            </div>
            <div className='service-item'>
              <div className='serv-icons'><img src={replacement} ></img>
              </div>
              <div className='serv-info'>
                      <h3>Teeth Replacement</h3>
                      <p>Replace lost teeth with our advanced teeth replacement solutions.</p>
                      <div> Icons made by <a href="https://www.flaticon.com/authors/iconjam" title="Iconjam"> Iconjam </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
                    </div>
            </div>


          </div>
        </div>

        <div className='label1'>
           <h3>Appointment</h3>
          </div>

        <div id='book'>
        <Book/>
        </div>


         {/* Location Section */}
         <div className='location' id='location'>
         <div className='label1'>
           <h3>Our Location</h3>
          </div>
          <div className='cta-home'>
          <h2>Find us at our clinic location:</h2>
          <button className='appointment' onClick={openInMaps}>
            Open in Google Maps
          </button>
          </div>
          <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8182097429294!2d36.81318207768147!3d-1.2829039953655699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3c3c3e2e9%3A0x6a9053d10aac5e1!2sDentplan%20Dental%20Surgeons!5e0!3m2!1sen!2ske!4v1723141944388!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>

    </div>
  );
}
