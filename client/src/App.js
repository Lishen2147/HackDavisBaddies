import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './style.css'

import AccessForm from './pages/accessForm'
import MemberDetailForm from './pages/memberDetailForm'
import LoginForm from './pages/loginForm'
import Navbar from './components/navbar'

const App = () => {


    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<LoginForm />}/>
            <Route path="/access-form" element={<AccessForm />}/>
            <Route path="/member-detail" element={<MemberDetailForm />}/>
        </Routes>
        </>
    )
}

export default App