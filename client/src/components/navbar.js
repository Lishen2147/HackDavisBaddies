import React, {useRef} from 'react' 
import {Link} from 'react-router-dom'

import logo from '../img/horiz_transparent.png'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <h3><img src={logo} alt="ECOCAR LOGO" style={{ width: '80px' }}/></h3>
            <nav ref={navRef}>
                <Link className='nav-li' to='/' onClick={showNavbar}>Log in</Link>
                <Link className='nav-li' to='/access-form' onClick={showNavbar}>Access Form</Link>
                <Link className='nav-li' to='/member-detail' onClick={showNavbar}>Member Detail Form</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar