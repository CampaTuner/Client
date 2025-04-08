import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data/products.js';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';

function Product() {
  let recentProducts = products.filter(p => p.isRecentProduct)
  recentProducts = recentProducts.splice(0, 4);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find(p => p.id == id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Product not found!</h1>
      </div>
    );
  }

  const handleAddToWishlist = () => {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      totalPrice: product.price * quantity,
    };
    dispatch(addToWishlist(item));
    alert('Added to wishlist!');
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 md:flex md:space-x-10">
        {/* Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-4">₹{product.price}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Sizes:</h3>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 cursor-pointer py-1 border rounded-md text-sm ${selectedSize === size ? 'bg-gray-900 text-white' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Colors:</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 cursor-pointer border rounded-md text-sm ${selectedColor === color ? 'bg-gray-900 text-white' : ''}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="font-semibold mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value))}
              className="w-16 px-2 cursor-pointer py-1 border rounded-md"
            />
          </div>

          <div className="my-6">
            <label htmlFor="review" className="block text-lg font-semibold mb-2">
              💭 Your Thoughts Before Buying
            </label>
            <textarea
              id="review"
              name="review"
              placeholder="Share your thoughts what you expect about the product..."
              className="w-full h-32 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          {/* Add to Cart & Wishlist */}
          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-white border border-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Add to Wishlist
            </button>
          </div>

        </div>
      </div>
      {/* Recent Products Section */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <h2 className="text-3xl text-white px-5 py-3 flex items-center gap-3 rounded-md font-bold mb-8 bg-gray-900">
          Recent Products
          {/* <MovingIcon /> */}

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
    </>
  );
}

export default Product;