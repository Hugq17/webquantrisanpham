import React from 'react'
import { Link } from 'react-router-dom'

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Home component renders the homepage of the Hinm Decor website.
 * It displays a welcome message and provides a link to view products.
 */

/*******  46d6e9fd-e6d1-45b5-836e-1d4e07c45ac5  *******/
export default function Home() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                Chào mừng đến với Hinm Decor!
            </h1>
            <p className="mb-6">Chuyên các sản phẩm nam châm tủ lạnh, ghim cài, vật dụng trang trí bàn học dễ thương.</p>
            <Link to="/products" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Xem sản phẩm</Link>
        </div>
    )
}
