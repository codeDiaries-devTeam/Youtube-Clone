import { Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import SearcBar from "../components/SearcBar"
import Home from "../pages/Home"

const AppRouter = () => {
  return (
    <>
        <SearcBar />
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
    </>
  )
}

export default AppRouter