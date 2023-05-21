import React, {useRef} from 'react' 
import {Link} from 'react-router-dom'

import logo from '../img/AggieReuse-logo.png'
import {FaBars, FaTimes} from "react-icons/fa"
import '../styles/components.css'

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header class="navbar">
            <h3><img src={logo} alt="AggieReuse LOGO" style={{ width: '100px' }} /></h3>
            <nav ref={navRef}>
                <Link className='nav-li' to='/' onClick={showNavbar}>Home</Link>
                <Link className='nav-li' to='/access-form' onClick={showNavbar}>Shop</Link>
                <Link className='nav-li' to='/insert-item' onClick={showNavbar}>Input Item</Link>
                <Link className='nav-li' to='/login-form' onClick={showNavbar}>Login</Link>
                <Link className='nav-li' to='/inventory' onClick={showNavbar}>Inventory</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header >
    )
}

export default Navbar