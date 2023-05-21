import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './style.css'

import Home from './pages/home'
import ShopForm from './pages/shopForm'
import NewItemForm from './pages/insertForm'
import Inventory from './pages/inventory'
import LoginForm from './pages/loginForm'
import LandingPage from './pages/landingPage'
import CreateUser from './pages/createUser'
// import Navbar from './components/navbar-employee'

const App = () => {


    return(
        <>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop-form" element={<ShopForm />}/>
            <Route path="/insert-item" element={<NewItemForm />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/login-form" element={<LoginForm />}/>
            <Route path="/landing-page" element={<LandingPage />}/>
            <Route path="/create-user" element={<CreateUser />}/>
        </Routes>
        </>
    )
}

export default App