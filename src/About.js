import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Zyntra AI Powered Ambulance Service</h1>
        <p>Revolutionizing Emergency Response with Cutting-edge AI</p>
      </header>

      <section className="about-content">
        <h2>Characteristics of Zyntra</h2>
        <ul>
          <li><strong>AI-Powered Dispatch:</strong> Advanced AI algorithms predict accident-prone areas and optimize ambulance dispatch for quicker response times.</li>
          <li><strong>Real-time Location Tracking:</strong> Get real-time updates on ambulance location with estimated time of arrival.</li>
          <li><strong>10-Minute Arrival Time:</strong> With strategically placed ambulance centers, we guarantee an ambulance will arrive at your location within 10 minutes.</li>
          <li><strong>Emergency Equipment:</strong> Our ambulances are equipped with life-saving equipment to handle emergencies on the way to the hospital.</li>
          <li><strong>Multilingual Support:</strong> Our service offers multilingual support, ensuring help is always just a call away, no matter your language.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
