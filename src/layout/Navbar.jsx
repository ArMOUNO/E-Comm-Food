
import { useState } from "react";
import { CartDrawer } from "../Components/CartDrawer";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <nav className="bg-gradient-to-b from-red-900 to-red-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div onClick={handleNavigate} className="flex-shrink-0">
            <Link to="/">
              <img src="/src/assets/Logo.png" alt="Logo" className="h-8" />
            </Link>


          </div>


          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>


            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg z-20">
                  <Link
                    to="/web-design"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Web Design
                  </Link>
                  <Link
                    to="/seo"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    SEO
                  </Link>
                  <Link
                    to="/marketing"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="relative flex items-center justify-end space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 w-[110px] md:w-auto h-7 md:h-auto rounded-md text-gray-700 placeholder-gray-bg-green-600 focus:ring-2 focus:ring-green-bg-green-600 focus:outline-none"
            />
            <CartDrawer />
          </div>



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

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
