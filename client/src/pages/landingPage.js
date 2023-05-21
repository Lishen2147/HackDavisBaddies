import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/landing.css'
import imageSrc from '../img/Clouds.png'


const LandingPage = () => {


    return(
        <div className='LandingPage'>
            <Link className="image_button" to="/insert-item"  style={{backgroundColor: '#67C4BC', textDecoration: "none"}}>Log New Item</Link>
            <Link className="image_button" to="/inventory"  style={{backgroundColor: '#F26C50', textDecoration: "none"}}>Check Inventory</Link>
            <Link className="image_button" to="/"  style={{backgroundColor: '#E8C83C', textDecoration: "none"}}>Create New User</Link>
        </div>
    )
}

export default LandingPage