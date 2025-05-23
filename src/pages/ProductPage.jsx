// src/pages/ProductPage.jsx
import React, { useState } from 'react'
import { images } from '../utils/images'
const products = [
    {
        id: 1,
        name: 'Combo 10 mẫu Tom & Jerry',
        price: '20.000₫',
        image: images['../assets/img/tom&jerry/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 2,
        name: 'Combo 10 mẫu Sinh Vật Biển',
        price: '20.000₫',
        image: images['../assets/img/sinhvatbien/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 3,
        name: 'Combo 10 mẫu Cô Bé Trái Cây',
        price: '20.000₫',
        image: images['../assets/img/cobetraicay/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 4,
        name: 'Combo 12 mẫu Nhân Vật Disney',
        price: '24.000₫',
        image: images['../assets/img/nhanvatdisney/bia.png'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 5,
        name: 'Combo 10 mẫu Cô Gái Áo Len',
        price: '20.000₫',
        image: images['../assets/img/cogaiaolen/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 6,
        name: 'Combo 10 mẫu Hình Quái Vật',
        price: '20.000₫',
        image: images['../assets/img/quaivat/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 7,
        name: 'Combo 10 mẫu Hình Cún Con',
        price: '20.000₫',
        image: images['../assets/img/cuncon/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 8,
        name: 'Combo 10 mẫu Nhân Vật Stitch V1',
        price: '20.000₫',
        image: images['../assets/img/stitchv1/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 9,
        name: 'Combo 10 mẫu Nhân Vật Stitch V2',
        price: '20.000₫',
        image: images['../assets/img/stitchv2/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 10,
        name: 'Combo 10 mẫu Nhân Vật Shin v1',
        price: '20.000₫',
        image: images['../assets/img/shinv1/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 11,
        name: 'Combo 10 mẫu Nhân Vật Shin v2',
        price: '20.000₫',
        image: images['../assets/img/shinv2/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    {
        id: 12,
        name: 'Combo 10 mẫu Nhân Vật Shin v3',
        price: '20.000₫',
        image: images['../assets/img/shinv3/bia.jpg'],
        category: 'Nam châm tủ lạnh',
    },
    // ... bạn thêm sản phẩm mới ở đây
]

const categories = ['Tất cả', 'Nam châm tủ lạnh', 'Ghim cài', 'Trang trí bàn học']

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')

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
