import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './style.css'

import Inventory from './pages/inventory'
import AccessForm from './pages/accessForm'
import NewItemForm from './pages/insertForm'
import LoginForm from './pages/loginForm'
import LandingPage from './pages/landingPage'
import Home from './pages/home'
import Navbar from './components/navbar'

const App = () => {


    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/access-form" element={<AccessForm />}/>
            <Route path="/insert-item" element={<NewItemForm />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/login-form" element={<LoginForm />}/>
            <Route path="/landing-page" element={<LandingPage />}/>
        </Routes>
        </>
    )
}

export default App