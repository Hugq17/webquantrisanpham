// src/pages/ProductPage.jsx
import React, { useState } from 'react'
import { images } from '../utils/images'
import { useNavigate } from 'react-router-dom'
import { products } from '../data/products'




const categories = ['Tất cả', 'Nam châm tủ lạnh', 'Ghim cài', 'Trang trí bàn học']

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')
    const navigate = useNavigate()

    const filteredProducts =
        selectedCategory === 'Tất cả'
            ? products
            : products.filter((p) => p.category === selectedCategory)

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Tất cả sản phẩm</h2>

            <div className="mb-6 flex space-x-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded ${selectedCategory === cat
                            ? 'bg-pink-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-pink-300'
                            } transition`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        onClick={() => navigate(`/product/${product.id}`)}
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-contain rounded"
                        />
                        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                        <p className="text-pink-600 font-semibold">{product.price}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
