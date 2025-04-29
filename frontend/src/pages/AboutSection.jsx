// AboutSection.jsx
import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <div className="container">
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div className="row gy-4">
        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
          <p>
            Welcome to JAYS & OAKS LTD, your trusted partner in IT and software development consultancy. 
            With a passion for innovation and expertise in our field, we deliver tailored solutions that drive success. 
            Our specialties include custom software development, data management, system integration, and comprehensive IT support. 
            Let us help you harness the power of technology to achieve your goals.
          </p>
          <ul>
            <li>
              <i className="bi bi-check2-circle"></i>
              <span>Custom software solutions designed to meet your unique business needs.</span>
            </li>
            <li>
              <i className="bi bi-check2-circle"></i>
              <span>Efficient data management and system integration services.</span>
            </li>
            <li>
              <i className="bi bi-check2-circle"></i>
              <span>Comprehensive IT support to ensure smooth operations.</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <p>
            JAYS & OAKS LTD is a premier IT and Software Development consultancy dedicated to providing innovative solutions 
            that empower businesses to thrive in the digital landscape. With a strong commitment to excellence and a 
            customer-centric approach, we tailor our services to meet the unique needs of each client
          </p>
          <a href="#" className="read-more">
            <span>Read More</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// import '../styles/About.css'

// function About() {
//   return (
//     <div className="about-page">
//       <h1>About Jay's Doors</h1>
      
//       <div className="about-content">
//         <div className="about-image">
//           <img src="https://via.placeholder.com/500x300?text=Our+Workshop" alt="Our workshop" />
//         </div>
        
//         <div className="about-text">
//           <h2>Our Story</h2>
//           <p>
//             Founded in 2010, Jay's Doors has been providing high-quality doors for homes 
//             and businesses across the country. What started as a small workshop has grown 
//             into a trusted name in door manufacturing and installation.
//           </p>
          
//           <h2>Our Mission</h2>
//           <p>
//             We are committed to creating beautiful, durable doors that enhance the security 
//             and aesthetics of your property. Every door is crafted with attention to detail 
//             and built to last.
//           </p>
          
//           <h2>Quality Guarantee</h2>
//           <p>
//             We stand behind our products with a comprehensive warranty and excellent 
//             customer service. Our team of experts ensures that every door meets our 
//             rigorous quality standards.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About