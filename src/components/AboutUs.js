import React, { useEffect, useState } from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    const [text, setText] = useState('At the forefront of ensuring good oral health practices');

    useEffect(() => {
        const words = [
            'At the forefront of ensuring good dental care practices',
            'At the forefront of ensuring a healthy smile',
            'At the forefront of ensuring healthy gums',
        ];

        let index = 0;
        const interval = setInterval(() => {
            setText(words[index]);
            index = (index + 1) % words.length;
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id='about'>
                <nav className='side-nav1'>
                    <ul>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#why-choose-us'>Why Choose Us?</a></li>
                        <li><a href='#mission-vision'>Mission & Vision</a></li>
                        <li><a href='#core-values'>Core Values</a></li>
                    </ul>
                </nav>
                <div className='about-page'>
                    <section id="about" className="about-us">
                        <div className="about-us-content">
                            <div className="about-us-section">
                                <div className='about-hero'>
                                    <h1>{text}</h1>
                                    <p>
                                        Bringing smiles to many through quality and affordable dental care services. Dentplan is home to professional dental surgeons with the aim of:
                                    </p>
                                </div>
                                <div className='about-hero-img'>
                                    <img src='https://ideogram.ai/assets/progressive-image/balanced/response/e_b3tCxKRCeyT_pOiwhmOw' alt='Dental Care' />
                                </div>
                                <div className="half-pipe-container">
                                    <div className="half-pipe"></div>
                                </div>
                                <div className='label'>
                                    <h2>About Us</h2>
                                </div>
                                <div className="card-container">
                                    <div className="card">
                                        <i className="fas fa-calendar-check"></i> 
                                        <div className="card-content">
                                            <h3>Prompt and Effective Services</h3>
                                            <p>Providing prompt, effective, and up-to-date dental health services to clients.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <i className="fas fa-book"></i> 
                                        <div className="card-content">
                                            <h3>Educate and Inform</h3>
                                            <p>Educating and informing clients on current treatment options.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <i className="fas fa-robot"></i> 
                                        <div className="card-content">
                                            <h3>Innovative Technology</h3>
                                            <p>Continuously improving on technology and treatment modalities to provide the best possible treatment services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-us-section" id="why-choose-us">
                                <div className='label'>
                                    <h2>Why Choose Us</h2>
                                </div>
                                <div className="card-container2">
                                    <div className="card2">
                                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/KMRaR3s9SCisVRqhAS94NQ" alt="Teamwork" />
                                        <div className="card-content2">
                                            <h3>Teamwork with Clients</h3>
                                            <p>We foster teamwork with our clients, which complements our service delivery and strengthens our business relationships.</p>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <img src="https://ideogram.ai/assets/image/lossless/response/GmU7e2HOSQuMZWdua7EqUQ" alt="Latest Technology" />
                                        <div className="card-content2">
                                            <h3>Up-to-Date Technology</h3>
                                            <p>We stay up to date with the latest technology and dental health services to ensure the best possible experience for our clients.</p>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/Dxkw4oMpSqmNfI0Hef3Blw" alt="World-Class Service" />
                                        <div className="card-content2">
                                            <h3>World-Class Service</h3>
                                            <p>We pride ourselves on providing world-class service through our highly experienced and professional staff.</p>
                                        </div>
                                    </div>
                                    <div className="card2">
                                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/QA3xLjRtTHmMl24dTPz5Nw" alt="Educational Infographics" />
                                        <div className="card-content2">
                                            <h3>Educational Infographics</h3>
                                            <p>We use infographics on our social media accounts to educate and inform clients about oral health and treatment options.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="mission-vision" className="about-us-section">
                            
                            <div className='mission-vision-box1-outer'>
                            <div className="mission-vision-box1">
                                <div>
                                  <h2>Mission</h2>
                                  <p>To provide prompt, effective, and up-to-date dental health services.</p>
                                </div>
                               
                                <img src="https://ideogram.ai/assets/image/lossless/response/sNmPGKvdTTuWCL7urDTwag"></img>
                            </div>

                            <div className='mission-vision-box1'>

                            </div>
                            <div className="mission-vision-box1">
                                <img src='https://ideogram.ai/assets/image/lossless/response/4ZY51d0sTf2MYxjnG5q1Qg'></img>
                                
                                <div>
                                <h2>Vision</h2>
                                <p>To be the leader in dental health services in the country.</p>
                                </div>
                            </div>
                            </div>
                           
                    
                    </section>
                    <section id="core-values" className="about-us-section">
                        <div className="core-values-container">
                            <h2>Core Values</h2>
                            <div className="core">
                                <div className="core-value-card">
     
                                    <img src=''></img>
                                    <h3>Trust</h3>
                                    <p>Building lasting relationships through trust and reliability.</p>
                                </div>
                                <div className="core-value-card">
                                    <i className="fas fa-clipboard-check"></i>
                                    <h3>Integrity</h3>
                                    <p>Maintaining high ethical standards in all our practices.</p>
                                </div>
                                <div className="core-value-card">
                                    <i className="fas fa-reliability"></i>
                                    <h3>Dependability</h3>
                                    <p>Ensuring our clients can rely on us for consistent quality and service.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
