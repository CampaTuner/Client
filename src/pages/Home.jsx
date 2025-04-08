import React from 'react'
import heroImg from '../assets/hero.png'
import products from '../data/products';
import { Link, useNavigate } from 'react-router-dom'
import MovingIcon from '@mui/icons-material/Moving';

function Home() {
    // Filter recent products
    const recentProducts = products.filter(p => p.isRecentProduct)

    const navigate = useNavigate();

    const handleGotoProduct = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div>
            {/* Hero Section */}
            <section className="w-full h-[80vh] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img
                    src={heroImg}
                    alt="Fashion Hero"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Step into Style</h1>
                    <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-lg">
                        Explore our newest arrivals and trends
                    </p>
                    <Link
                        to="/collection"
                        className="mt-6 inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Recent Products Section */}
            <section className="py-12 px-4 md:px-12 bg-white">
                <h2 className="text-3xl text-white px-5 py-3 flex items-center gap-3 rounded-md font-bold mb-8 bg-gray-900">
                    Recent Products
                    <MovingIcon />

                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {recentProducts.map((product) => (

                        <div onClick={() => { handleGotoProduct(product.id) }} key={product.id} className="border cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-contain"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.description.slice(0, 50)}...</p>
                                <p className="mt-2 font-bold text-gray-800">₹{product.price}</p>
                                <Link
                                    to={`/product/${product.id}`}
                                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
