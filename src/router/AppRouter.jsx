import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <>
    <Routes>

        <Route path='/' element={<Home/>} />
        
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter