import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
