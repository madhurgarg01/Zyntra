import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Zyntra</h1>
        <p>We're here to assist you 24/7</p>
      </header>

      <section className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
