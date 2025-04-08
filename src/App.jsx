import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Product from './pages/product'
import Wishlist from './pages/Wishlist'
import ScrollToTop from './utils/ScrollToTop'
import AllProducts from './pages/AllProducts'
import UploadProduct from './pages/UploadProduct'

export default function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/collection" element={<AllProducts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/upload" element={<UploadProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}
