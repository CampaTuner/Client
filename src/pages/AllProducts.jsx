import React from 'react';
import products from '../data/products'; // adjust path as needed
import { Link } from 'react-router-dom';

function AllProducts() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                                <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
                                <p className="text-xl font-bold text-black mt-2">₹{product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
