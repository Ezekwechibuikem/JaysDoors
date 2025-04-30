import Card from '../components/Card'
import '../styles/Products.css'

import woodenDoor from '../assets/wooden-door.jpeg'
import glassDoor from '../assets/glass-patio-door.jpeg'
import steelDoor from '../assets/steel-security-door.jpeg'
import interiorDoor from '../assets/interior-door.jpeg'

function Products() {
  const products = [
    {
      id: 1,
      title: "Wooden Front Door",
      image: woodenDoor, 
      description: "Classic wooden front door with premium finish"
    },
    {
      id: 2,
      title: "Glass Patio Door",
      image: glassDoor, 
      description: "Elegant glass patio door for maximum natural light"
    },
    {
      id: 3,
      title: "Steel Security Door",
      image: steelDoor, 
      description: "Heavy-duty steel door for maximum security"
    },
    {
      id: 4,
      title: "Interior Panel Door",
      image: interiorDoor,
      description: "Stylish interior panel door for bedrooms and offices"
    }
  ]

  return (
    <div className="products-page">
      <h1>Our Door Products</h1>
      <p>Browse our selection of high-quality doors</p>
      
      <div className="products-grid">
        {products.map(product => (
          <Card 
            key={product.id}
            title={product.title} 
            image={product.image} 
            description={product.description} 
          />
        ))}
      </div>
    </div>
  )
}

export default Products