import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> navigate('/product')}>Navigate to product</button>
    </div>
  )
}

export default Home