// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/AboutSection';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Team from './pages/Team';
// import Pricing from './pages/Pricing';
// import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



// import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import About from './pages/About'
// import Products from './pages/Products'
// import Contact from './pages/Contact'
// import './App.css'

// function App() {
//   const [message, setMessage] = useState('')

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/hello/')
//         const data = await response.json()
//         setMessage(data.message)
//       } catch (error) {
//         console.error('Error fetching data:', error)
//         setMessage('Error connecting to API')
//       }
//     }
    
//     fetchData()
//   }, [])

//   return (
//     <Router basename="/">
//       <div className="App">
//         <Navbar />
//         <div className="api-message">
//           <p>{message}</p>
//         </div>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App