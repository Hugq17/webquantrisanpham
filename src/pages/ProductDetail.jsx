// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom'
import { images } from '../utils/images'
import React from 'react'
import { products } from '../data/products'
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = products.find((p) => p.id === parseInt(id))

    if (!product) return <div className="p-6">Sản phẩm không tồn tại</div>

    return (
        <div className="p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
            >
                ← Quay lại
            </button>

            <div className="max-w-xl mx-auto">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain rounded mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-pink-600 text-xl font-semibold mb-1">{product.price}</p>
                <p className="text-gray-600">Phân loại: {product.category}</p>
            </div>
        </div>
    )
}

