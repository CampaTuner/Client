import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">modimal</h3>
          <p className="text-sm">
            Redefining fashion with comfort, elegance, and sustainability.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-2">Stay updated with latest trends and offers.</p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-3 py-2 rounded-l-md text-white border focus:outline-none"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-white text-gray-900 font-medium rounded-r-md hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} modimal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
