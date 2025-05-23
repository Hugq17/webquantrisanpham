import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Chào mừng đến với Hinm Decor!</h1>
            <p className="mb-6">Chuyên các sản phẩm nam châm tủ lạnh, ghim cài, vật dụng trang trí bàn học dễ thương.</p>
            <Link to="/products" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Xem sản phẩm</Link>
        </div>
    )
}