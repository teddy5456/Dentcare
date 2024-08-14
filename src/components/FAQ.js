import React, { useState } from 'react';
import './FAQ.css'; // Ensure you have a CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all FAQs or limited ones
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chatbox visibility
  const [isClicked, setIsClicked] = useState(false);

  const faqs = [
    {
      "question": "What is the purpose of this website?",
      "answer": "This website provides information and services related to dental care, including teeth whitening, orthodontic treatments, and more."
    },
    {
      "question": "How can I book an appointment?",
      "answer": "You can book an appointment by clicking on the 'Book Appointment' button and filling out the required information."
    },
    {
      "question": "What are the office hours?",
      "answer": "Our office is open from 8 a.m. to 5 p.m. Monday through Friday. We are closed on weekends and public holidays."
    },
    {
      "question": "Where are you located?",
      "answer": "We are located at Koinange Street, Nairobi. You can find us on Google Maps using the link provided."
    },
    {
      "question": "What insurance plans do you accept?",
      "answer": "We accept a variety of insurance plans. Please contact our office for more details on specific plans and coverage."
    },
    {
      "question": "Do you offer emergency dental services?",
      "answer": "Yes, we offer emergency dental services. Please contact us immediately if you have a dental emergency."
    },
    {
      "question": "How can I contact the dental office?",
      "answer": "You can contact us via phone at +254 720 285946 or email at info@dentplan.co.ke."
    },
    {
      "question": "What should I do if I need to cancel or reschedule my appointment?",
      "answer": "Please call us at least 24 hours in advance to cancel or reschedule your appointment to avoid any cancellation fees."
    },
    {
      "question": "What types of dental services do you offer?",
      "answer": "We offer a wide range of dental services including routine check-ups, teeth whitening, orthodontic treatments, dental implants, gum treatments, and more."
    },
    {
      "question": "How do I know if I need a dental check-up?",
      "answer": "Consider a dental check-up if you experience any of the following: tooth pain, sensitivity, bleeding gums, bad breath, or if it’s been more than six months since your last visit."
    },
    {
      "question": "What should I do if I have a dental emergency?",
      "answer": "In case of a dental emergency, contact our office immediately. We provide emergency dental services for issues such as severe toothache, broken teeth, or injuries."
    },
    {
      "question": "What payment options are available?",
      "answer": "We offer several payment options including credit/debit cards, cash, and flexible payment plans. Please discuss your options with our billing department."
    },
    {
      "question": "How can I prepare for my first dental visit?",
      "answer": "For your first visit, bring any relevant medical records, a list of medications you are taking, and your insurance information. Arrive a few minutes early to complete any necessary paperwork."
    },
    {
      "question": "Do you offer services for children?",
      "answer": "Yes, we provide dental care for patients of all ages, including children. We offer pediatric dental services tailored to young patients."
    },
    {
      "question": "How often should I visit the dentist?",
      "answer": "It’s generally recommended to visit the dentist every six months for routine check-ups and cleanings. However, your dentist may recommend more frequent visits based on your individual needs."
    },
    {
      "question": "What should I do to prepare for a specific treatment or procedure?",
      "answer": "Prepare by following any specific instructions provided by your dentist, which may include dietary restrictions or avoiding certain medications."
    },
    {
      "question": "What should I expect after a dental procedure, and how should I care for my teeth afterward?",
      "answer": "Expect some discomfort or swelling after procedures. Follow post-care instructions to ensure proper healing and avoid complications."
    },
    {
      "question": "How do you protect my personal and medical information?",
      "answer": "We use secure systems and follow strict privacy policies to protect your personal and medical information."
    },
    {
      "question": "Do you offer accommodations for patients with special needs?",
      "answer": "Yes, we provide accommodations to ensure all patients receive the care they need. Please inform us of any special requirements."
    },
    {
      "question": "What are your cancellation and no-show policies?",
      "answer": "Appointments should be canceled at least 24 hours in advance. No-shows may incur a fee."
    },
    {
      "question": "What should new patients know before their first visit?",
      "answer": "New patients should bring their ID, insurance information, and complete any required forms ahead of their appointment."
    },
    {
      "question": "How will I be billed for my dental services, and when is payment due?",
      "answer": "Billing information will be provided after your treatment. Payment is typically due at the time of service unless otherwise arranged."
    },
    {
      "question": "Who should I contact if I have questions or concerns after office hours?",
      "answer": "For after-hours concerns, please contact our emergency line or visit our website for additional information."
    },
    {
      "question": "How can I provide feedback or file a complaint about my experience?",
      "answer": "Feedback and complaints can be submitted via our website or directly to our patient relations department."
    },
    {
      "question": "What safety measures are in place due to COVID-19?",
      "answer": "We follow CDC guidelines and local health regulations, including sanitization, social distancing, and mask-wearing protocols."
    },
    {
      "question": "Do you offer orthodontic treatments?",
      "answer": "Yes, we provide various orthodontic treatments including braces and clear aligners to correct misaligned teeth and improve your smile."
    },
    {
      "question": "What is teeth whitening, and how does it work?",
      "answer": "Teeth whitening is a cosmetic treatment that lightens the color of your teeth. We use professional-grade products to remove stains and brighten your smile."
    },
    {
      "question": "What is a dental implant?",
      "answer": "A dental implant is a titanium post that is surgically placed into the jawbone to replace a missing tooth. It acts as a foundation for a crown or bridge."
    },
    {
      "question": "Are your dental treatments safe?",
      "answer": "Yes, we adhere to the highest safety and hygiene standards. All treatments are performed by qualified professionals using state-of-the-art equipment."
    },
    {
      "question": "Can I bring a companion with me to my appointment?",
      "answer": "Yes, you can bring a companion with you. However, due to space and safety considerations, we may have restrictions in place."
    },
    {
      "question": "Do you offer sedation options for anxious patients?",
      "answer": "Yes, we offer various sedation options to help patients feel more comfortable during their dental procedures."
    },
    {
      "question": "How can I find out if my dental insurance covers a specific treatment?",
      "answer": "Contact your insurance provider directly or our office for assistance with verifying coverage for specific treatments."
    },
    {
      "question": "What should I do if I have bad breath?",
      "answer": "Bad breath can be caused by various factors. We recommend scheduling a dental check-up to identify and address any underlying issues."
    },
    {
      "question": "What types of fillings do you use?",
      "answer": "We use high-quality materials for fillings, including composite resins and amalgam, depending on your specific needs and preferences."
    },
    {
      "question": "How can I improve my oral hygiene at home?",
      "answer": "Brushing twice a day with fluoride toothpaste, flossing daily, and using mouthwash can significantly improve your oral hygiene."
    },
    {
      "question": "What are the signs of gum disease?",
      "answer": "Signs of gum disease include swollen or bleeding gums, persistent bad breath, and gum recession. Schedule an appointment if you notice any of these symptoms."
    },
    {
      "question": "Do you offer dental services for seniors?",
      "answer": "Yes, we provide comprehensive dental care for seniors, including preventive, restorative, and cosmetic treatments tailored to their needs."
    },
    {
      "question": "How long does a typical dental cleaning take?",
      "answer": "A typical dental cleaning usually takes about 30 to 60 minutes, depending on your oral health and the amount of buildup that needs to be addressed."
    },
    {
      "question": "What is the difference between a dentist and an orthodontist?",
      "answer": "A dentist provides general dental care, while an orthodontist specializes in diagnosing and correcting misaligned teeth and jaws through braces and other treatments."
    },
    {
      "question": "Can dental treatments be done during pregnancy?",
      "answer": "Yes, many dental treatments are safe during pregnancy. However, it’s important to inform your dentist if you are pregnant to ensure appropriate care."
    },
    {
      "question": "Do you offer cosmetic dental procedures?",
      "answer": "Yes, we offer a range of cosmetic procedures including veneers, bonding, and smile makeovers to enhance the appearance of your smile."
    },
    {
      "question": "How can I improve the appearance of my smile?",
      "answer": "Consult with our cosmetic dentist to explore options such as teeth whitening, veneers, or orthodontic treatments to improve the aesthetics of your smile."
    },
    {
      "question": "What is preventive dental care?",
      "answer": "Preventive dental care includes routine check-ups, cleanings, and exams to maintain oral health and prevent issues such as cavities and gum disease."
    },
    {
      "question": "What should I do if I lose a dental crown or filling?",
      "answer": "Contact our office as soon as possible to schedule an appointment. In the meantime, avoid chewing on the affected area and keep it clean."
    },
    {
      "question": "How can I whiten my teeth safely?",
      "answer": "We recommend professional whitening treatments provided by our office, as over-the-counter products may not be as effective or safe."
    },
    {
      "question": "What are dental veneers and how do they work?",
      "answer": "Dental veneers are thin shells of porcelain or composite resin that cover the front surface of teeth to improve their appearance and correct imperfections."
    },
    {
      "question": "What are the benefits of fluoride treatments?",
      "answer": "Fluoride treatments help strengthen tooth enamel, making it more resistant to decay and cavities, especially in children and individuals with higher cavity risk."
    },
    {
      "question": "How can I address tooth sensitivity?",
      "answer": "Tooth sensitivity can be managed with desensitizing toothpaste and avoiding extremely hot or cold foods. Consult our office for further treatment options if needed."
    },
    {
      "question": "What is gum grafting and when is it needed?",
      "answer": "Gum grafting is a procedure to restore lost gum tissue due to gum recession. It helps protect the roots of your teeth and improve the overall appearance of your smile."
    },
    {
      "question": "Are there any dietary recommendations for maintaining oral health?",
      "answer": "A balanced diet rich in fruits, vegetables, and low in sugary foods can significantly contribute to maintaining good oral health."
    }
  ]
  ;

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setShowAll(!showAll);
  };



  const toggleChatbox = () => {
    setIsClicked(true);
    setIsChatOpen(!isChatOpen);

    // Reset the animation by removing the class after it completes
    setTimeout(() => {
      setIsClicked(false);
    }, 600); // Duration of the animation
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="search-faq">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search FAQs"
        />
      </div>
      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          (showAll ? filteredFaqs : filteredFaqs.slice(0, 5)).map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{faq.question}</h3>
                <span className={`toggle-icon ${activeIndex === index ? 'open' : ''}`}>
                  <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No FAQs found matching your search.</p>
        )}
      </div>
      {filteredFaqs.length > 5 && (
        <button className="show-more-button" onClick={handleShowMore}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
      
      {/* Chatbox Icon and Form */}
      <div className={`chatbox-container ${isChatOpen ? 'open' : ''}`}>
      <div
      className={`chatbox-icon ${isClicked ? 'clicked' : ''}`}
      onClick={toggleChatbox}
    >
      <i className="fa fa-comments"></i>
    </div>
        {isChatOpen && (
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;