// frontend/src/App.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  
  // Fetch data from Django API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/hello/')
        setMessage(response.data.message)
      } catch (error) {
        console.error('Error fetching data:', error)
        setMessage('Error connecting to API')
      }
    }
    
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>My Door Website</h1>
      <p>Message from Django API: {message}</p>
      
      {/* Example navigation for multi-page setup */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App