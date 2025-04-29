// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Stay updated with our latest news and offers</p>
              <form>
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <Link to="/" className="logo d-flex align-items-center">
                <span>JAYS & OAKS LTD</span>
              </Link>
              <p>
                Expert IT and software development consultancy services tailored to meet the unique needs of your business. 
                We specialize in custom software solutions, data management, system integration, and comprehensive IT support.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">Services</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">Software Development</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">IT Consultancy</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">System Integration</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">Data Management</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/services">IT Support</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                123 Tech Street <br />
                London, LN 123456<br />
                United Kingdom <br /><br />
                <strong>Phone:</strong> +44 1234 567890<br />
                <strong>Email:</strong> info@jaysandoaks.com<br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; {currentYear} <strong><span>JAYS & OAKS LTD</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed with <i className="bi bi-heart-fill"></i> by <a href="#">JAYS & OAKS Team</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;