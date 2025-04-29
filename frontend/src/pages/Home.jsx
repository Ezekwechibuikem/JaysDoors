// Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../pages/AboutSection';
// import ServicesSection from '../components/ServicesSection';
// import PortfolioSection from '../components/PortfolioSection';
// import TeamSection from '../components/TeamSection';
// import PricingSection from '../components/PricingSection';
// import ContactSection from '../components/ContactSection';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // You can add any initialization code for AOS, Swiper, etc. here
    // Similar to what might be in your original template's JS file
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <main id="main">
        <section id="about" className="about">
          <AboutSection />
        </section>
        
        {/* <section id="why-us" className="why-us section-bg">
          <ServicesSection />
        </section> */}
        
        {/* <section id="portfolio" className="portfolio">
          <PortfolioSection />
        </section> */}
        
        {/* <section id="team" className="team section-bg">
          <TeamSection />
        </section> */}
        
        {/* <section id="pricing" className="pricing">
          <PricingSection />
        </section> */}
        
        {/* <section id="contact" className="contact">
          <ContactSection />
        </section> */}
      </main>
    </div>
  );
};

export default Home;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/Home.css';

// const Home = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const toggleMobileNav = () => {
//     setIsMobileNavOpen(!isMobileNavOpen);
//   };
  
//   return (
//     <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="container-fluid container-xl position-relative d-flex align-items-center">
//         <Link to="/" className="logo d-flex align-items-center me-auto">
//           {/* Uncomment the line below if you also wish to use an image logo */}
//           {/* <img src="/assets/img/logo.png" alt="" /> */}
//           <h1 className="sitename">JAYS & OAKS LTD</h1>
//         </Link>

//         <nav id="navmenu" className={`navmenu ${isMobileNavOpen ? 'navmenu-active' : ''}`}>
//           <ul>
//             <li>
//               <Link to="/" className="active">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/portfolio">Portfolio</Link>
//             </li>
//             <li>
//               <Link to="/team">Team</Link>
//             </li>
//             <li>
//               <Link to="/pricing">Pricing</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//           <i 
//             className={`mobile-nav-toggle d-xl-none bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`} 
//             onClick={toggleMobileNav}
//           ></i>
//         </nav>

//         <Link to="/about" className="btn-getstarted">Get Started</Link>
//       </div>
//     </header>
//   );
// };

// export default Home;





// // import Card from '../components/Card'
// // import '../styles/Home.css'

// // function Home() {
// //   return (
// //     <div className="home-page">
// //       <section className="hero">
// //         <h1>Welcome to Jay's Doors</h1>
// //         <p>Quality doors for every home and office</p>
// //       </section>
      
// //       <section className="featured-products">
// //         <h2>Featured Products</h2>
// //         <div className="card-container">
// //           <Card 
// //             title="Premium Wooden Door" 
// //             image="https://via.placeholder.com/300x200?text=Wooden+Door" 
// //             description="High-quality wooden door with excellent finish and durability." 
// //           />
// //           <Card 
// //             title="Modern Glass Door" 
// //             image="https://via.placeholder.com/300x200?text=Glass+Door" 
// //             description="Elegant glass door design perfect for contemporary homes." 
// //           />
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// // export default Home