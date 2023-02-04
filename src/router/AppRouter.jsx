<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Footer'
=======
import { Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import SearcBar from "../components/SearcBar"
import Home from "../pages/Home"
>>>>>>> 93c2bf3f634f8218475fd4f4840c43acaba7b80a

const AppRouter = () => {
  return (
    <>
<<<<<<< HEAD
    <Routes>

        <Route path='/' element={<Home/>} />
        
    </Routes>
    <Footer/>
=======
        <SearcBar />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
>>>>>>> 93c2bf3f634f8218475fd4f4840c43acaba7b80a
    </>
  )
}

export default AppRouter