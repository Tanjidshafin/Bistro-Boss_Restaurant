import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"





function App() {


  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
