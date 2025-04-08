import React from 'react'
import login from '../assets/login.png'

function Login() {
  return (
    <div className="min-h-[65vh] flex flex-col md:flex-row items-center justify-center px-4">
      {/* Left Image */}
      <div className="md:w-1/2  flex justify-center mb-8 md:mb-0">
        <img
          src={login}
          alt="Login visual"
          className="w-[600px] rounded-md h-[300px] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Welcome Back</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
            >
              Login
            </button>
            <p className="text-sm text-center mt-4 text-gray-600">
              Don’t have an account? <a href="/register" className="text-gray-900 underline">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
