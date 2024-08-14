import React, { useState } from 'react';
import './Book.css';
import emailjs from 'emailjs-com'; // Import EmailJS

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    appointmentDay: '',
  });

  const [focusedInput, setFocusedInput] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
  };

  const handleBlur = () => {
    setFocusedInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const companyEmail = 'teddywambua5456@gmail.com'; // Company email
  
    // Send email to the company
    emailjs.send('service_jogiulo', 'template_a7ckadj', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      appointmentDay: formData.appointmentDay,
      to_email: companyEmail,
    }, 'gZaCI1aQOM2yluTh8')
      .then((result) => {
        console.log('Company Email Result:', result.text);
  
        // Send email to the client
        return emailjs.send('service_jogiulo', 'template_bn3uzbq', {
          name: formData.name,
          service: formData.service,
          appointmentDay: formData.appointmentDay,
          message: formData.message,
          to_email: formData.email, // Client's email
        }, 'gZaCI1aQOM2yluTh8');
      })
      .then((result) => {
        console.log('Client Email Result:', result.text);
        setFormStatus('Thank you for your booking. We have sent you a confirmation email.');
      }, (error) => {
        console.log('Email Error:', error.text);
        setFormStatus('There was an error sending the email. Please try again later.');
      });
  };
  
  return (
    <div className="book-container">
      <div className='info'>
        <p>Fill out the form to schedule an appointment with us. We look forward to assisting you with your needs.</p>
        <h3>More Information</h3>
        <ul>
          <li><i className='fa-solid fa-phone'></i> <span>+254 720 285946</span></li>
          <li><i className='fa-solid fa-envelope'></i> <span>info@dentplan.co.ke</span></li>
          <li><i className='fa-solid fa-map-marker-alt'></i> <span className='show'>Koinange street</span>, Nairobi</li>
        </ul>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="e.g John Doe"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'name' ? 'focused' : ''}
                required
              />
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="janedoe@dent.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'email' ? 'focused' : ''}
                required
              />
            </div> 
          </div>
          <div className="form-row">
            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'phone' ? 'focused' : ''}
                required
              />
            </div>

            <div>
              <label>Service:</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'service' ? 'focused' : ''}
                required
              >
                <option value="">Select Service</option>
                <option value="consultation">Consultation</option>
                <option value="cleaning">Cleaning</option>
                <option value="whitening">Whitening</option>
                <option value="extraction">Extraction</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="e.g The tooth is purple"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'message' ? 'focused' : ''}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="appointmentDay"
                value={formData.appointmentDay}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focusedInput === 'appointmentDay' ? 'focused' : ''}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </div>
    </div>
  );
};

export default Book;
