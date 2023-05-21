import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './style.css'

import Inventory from './pages/inventory'
import AccessForm from './pages/accessForm'
import MemberDetailForm from './pages/memberDetailForm'
import LoginForm from './pages/loginForm'
import Home from './pages/home'
import Navbar from './components/navbar'

const App = () => {


    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/access-form" element={<AccessForm />}/>
            <Route path="/member-detail" element={<MemberDetailForm />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/login-form" element={<LoginForm />}/>
        </Routes>
        </>
    )
}

export default App