import Card from '../components/Card'
//import doorImage1 from '../assets/door1.jpg'
//import doorImage2 from '../assets/door2.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Jay's Doors</h1>
        <p>Quality doors for every home and office</p>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="card-container">
          <Card 
            title="Premium Wooden Door" 
            image="https://via.placeholder.com/300x200?text=Wooden+Door" 
            description="High-quality wooden door with excellent finish and durability." 
          />
          <Card 
            title="Modern Glass Door" 
            image="https://via.placeholder.com/300x200?text=Glass+Door" 
            description="Elegant glass door design perfect for contemporary homes." 
          />
        </div>
      </section>
    </div>
  )
}

export default Home