import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    const wishlistCount = useSelector(state => state.wishlist.wishlist.length);


    return (
        <div className="font-sans">
            {/* Free shipping banner */}
            <div className="bg-gray-900 text-white text-sm text-center py-2">
                Enjoy Free Shipping On All Orders
            </div>

            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 shadow-md">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800 tracking-wide">
                    modimal
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to={"/"}>
                        <p className="hover:text-black cursor-pointer">Home</p>
                    </Link>
                    <Link to="/collection">
                        <p className="hover:text-black cursor-pointer">Collection</p>
                    </Link>
                    <Link to={"/upload"}>
                        <p className="hover:text-black cursor-pointer">Upload</p>
                    </Link>
                    <p className="hover:text-black cursor-pointer">Plus Size</p>
                    <p className="hover:text-black cursor-pointer">Sustainability</p>
                </nav>

                {/* Icons */}
                <div className="flex space-x-4 text-gray-600 relative">
                    <SearchIcon className="cursor-pointer hover:text-black" />
                    <Link to={'/login'}>
                        <LockOpenIcon className="cursor-pointer hover:text-black" />
                    </Link>
                    <Link to={"/register"}>
                        <HowToRegIcon className="cursor-pointer hover:text-black" />
                    </Link>
                    <Link to="/wishlist" className="relative">
                        <ShoppingCartIcon className="cursor-pointer hover:text-black" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {wishlistCount}
                            </span>
                        )}
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
