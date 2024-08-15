import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './TeamComponent.css';
import Emma from '../assets/emma.png'

const teamMembers = [
  {
    name: 'Dr. Emma Wainaina',
    role: 'Practicing Orthodontic',
    image: Emma,
    bio: `Dr. Emma is a Certified Dentist, Orthodontist, and pediatrician with over a decade of experience in smile resolution and teeth alignment. 
          She is the Founder & Director of Dentplan Dental Surgeons, where she offers day-to-day dental health services and manages the strategic development and growth of the firm.`,
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Dr. Mwinzi',
    role: 'Certified Dentist and Implantologist',
    image: 'https://ideogram.ai/assets/progressive-image/balanced/response/9fsiTkP-Q4i-v0vB6OnXbg',
    bio: `Dr. Mwinzi is a Certified Dentist and Implantologist with over 15 years of clinical practice experience. He is passionate about putting smiles on people's faces and is particularly keen on creating a younger generation that is more health-conscious. He aims to demystify dental health treatment as painful, expensive, and for the chosen few with Insurance.`,
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

const TeamComponent = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className={`team-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
            <div className="social-icons">
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              )}
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
