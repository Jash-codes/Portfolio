import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_f7upg1e',    // ✅ Your Service ID
      'template_xjaucpk',   // ✅ Your Template ID
      form.current,
      't09W3YDedmQJ5fkoj'   // ✅ Your Public Key
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset(); // Clears the form inputs
        
        // Reset button text after 3 seconds
        setTimeout(() => setStatus(''), 3000);
    }, (error) => {
        console.log(error.text);
        setStatus('error');
        alert("Failed to send. Please check your internet connection.");
    });
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        
        {/* Left Side: Contact Info */}
        <div className="contact-info glass-card">
          <h3>Let's Talk</h3>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you!</p>
          
          <div className="info-item">
            <FiMail className="info-icon" />
            {/* Replace with your actual email if you want it visible */}
            <span>jashwanthg365@gmail.com</span> 
          </div>
          <div className="info-item">
            <FiMapPin className="info-icon" />
            <span>Chennai, India</span>
          </div>
          <div className="info-item">
            <FiPhone className="info-icon" />
            <span>+91 8939299158</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form glass-card">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" required placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" required placeholder="john@example.com" />
          </div>
          
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required placeholder="Write your message here..."></textarea>
          </div>

          <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending' || status === 'success'}>
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            <FiSend className="btn-icon" />
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;