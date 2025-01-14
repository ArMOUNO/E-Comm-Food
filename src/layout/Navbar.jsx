import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../Context/CartContextProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartData } = useContext(CartContext);
  console.log(cartData)
  return (
    <nav className="bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              <img src="/src/assets/Logo.png" alt="Logo" className="h-8" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg z-20">
                  <a
                    href="/web-design"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Web Design
                  </a>
                  <a
                    href="/seo"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    SEO
                  </a>
                  <a
                    href="/marketing"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Marketing
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md text-gray-700 placeholder-gray-bg-green-600 focus:ring-2 focus:ring-green-bg-green-600 focus:outline-none"
              />
            </div>

            {/* Cart Icon */}
            <button className="relative">
              <FaCartShopping className="w-6 h-6 text-white" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
              {cartData && cartData.length ? cartData.length : 0}

              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="/services"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>

          {/* Mobile Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-bg-green-600 focus:ring-2 focus:ring-green-bg-green-600 focus:outline-none"
          />

          {/* Mobile Cart Icon */}
          <button className="relative block">
            <FaCartShopping className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
