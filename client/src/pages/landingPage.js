import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/landing.css'
// import imageSrc from '../img/Clouds.png'
import Navbar from '../components/navbar-employee'

const LandingPage = () => {

    return(
        <div>        
            <Navbar />
            <div className='LandingPage'>
                <h5 style={{textAlign: 'center'}}>Welcome to the Volunteer Portal</h5>
                <Link className="image_button" to="/insert-item"  style={{backgroundColor: '#67C4BC', textDecoration: "none"}}>Log New Item</Link>
                <Link className="image_button" to="/inventory"  style={{backgroundColor: '#F26C50', textDecoration: "none"}}>Check Inventory</Link>
                <Link className="image_button" to="/"  style={{backgroundColor: '#E8C83C', textDecoration: "none"}}>Create New User</Link>
            </div>
        </div>

    )
}

export default LandingPage