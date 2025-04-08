import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/wishlistSlice';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 my-[10rem]">No items in your wishlist.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div key={index} className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-600 mb-1">{item.description}</p>
              <div className="text-sm text-gray-700">
                <p>Color: <span className="font-medium">{item.color}</span></p>
                <p>Size: <span className="font-medium">{item.size}</span></p>
                <p>Quantity: <span className="font-medium">{item.quantity}</span></p>
                <p>Total: ₹<span className="font-medium">{item.totalPrice}</span></p>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
