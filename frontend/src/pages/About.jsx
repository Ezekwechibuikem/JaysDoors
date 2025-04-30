import '../styles/About.css'

function About() {
  return (
    <div className="about-page">
      <h1>About Jay's Doors</h1>
      
      <div className="about-content">
        <div className="about-image">
          <img src="https://via.placeholder.com/500x300?text=Our+Workshop" alt="Our workshop" />
        </div>
        
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Jay's Doors has been providing high-quality doors for homes 
            and businesses across the country. What started as a small workshop has grown 
            into a trusted name in door manufacturing and installation.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            We are committed to creating beautiful, durable doors that enhance the security 
            and aesthetics of your property. Every door is crafted with attention to detail 
            and built to last.
          </p>
          
          <h2>Quality Guarantee</h2>
          <p>
            We stand behind our products with a comprehensive warranty and excellent 
            customer service. Our team of experts ensures that every door meets our 
            rigorous quality standards.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About