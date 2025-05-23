import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <nav className="bg-pink-200 shadow p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-pink-700">Hinm Decor</Link>
          <div className="space-x-4">
            <Link to="/products" className="hover:text-pink-500">Sản phẩm</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  )
}