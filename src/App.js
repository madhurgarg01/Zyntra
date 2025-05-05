import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <header className="navbar">
          <div className="logo">Zyntra</div>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <a href="#appointment" className="cta-button">Book an Appointment</a>
          </nav>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <div>
              {/* Hero Section */}
              <section className="hero-section">
                <h1 className="hero-title">Zyntra - On Demand Ambulance Service</h1>
                <p className="hero-subtitle">Fast. Reliable. Life-saving.</p>
                <a href="#appointment" className="cta-button">Book an Appointment</a>
              </section>

              {/* Why Choose Zyntra Section */}
              <section className="about-section">
                <h2>Why Choose Zyntra?</h2>
                <p>
                  We bring ambulances to your doorstep within 10 minutes. With AI-based dispatch and location prediction,
                  Zyntra ensures timely emergency support when every second counts.
                </p>
              </section>

              {/* Appointment Section */}
              <section className="appointment-section" id="appointment">
                <h2>Book an Appointment</h2>
                <form className="appointment-form">
                  <div className="input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Enter Full Name" required />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter Phone Number" required />
                  </div>

                  <div className="input-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="Enter Location" required />
                  </div>

                  <div className="input-group">
                    <label htmlFor="datetime">Date & Time</label>
                    <input type="datetime-local" id="datetime" required />
                  </div>

                  <button type="submit" className="submit-btn">Request Ambulance</button>
                </form>
              </section>
            </div>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/terms" className="footer-link">Terms & Conditions</a>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="mailto:support@zyntra.com" className="footer-link">Contact Us</a>
            </div>

            <div className="socials">
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Facebook</a>
            </div>

            <p>&copy; 2025 Zyntra. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
