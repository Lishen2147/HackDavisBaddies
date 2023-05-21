import React from 'react'
import imageSrc from '../img/background.png'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={imageSrc} alt="Description" class="background" />
      </div>
    </div>
  )
}

export default Home