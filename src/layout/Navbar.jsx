
import { useEffect, useState } from "react";
import { CartDrawer } from "../Components/CartDrawer";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../Components/Login";

import SearchModal from "../Components/SearchModal";
import axios from "axios";

// import Login from "../Components/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchItem,setSearchItem]=useState()
  const [products,setProducts]=useState()
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  const getItem = JSON.parse(localStorage.getItem("user"));
  const HandlelogOut = () => {
    localStorage.removeItem("user");
    console.log("User has been logged out.");

  };

  const handleSearch = (e) => {
    const searchItm = e.target.value;
    setSearchItem(searchItm)
    if(searchItm?.length>0){
      setModalOpen(true)
    }else
    setModalOpen(false);
    
  }
  const fetchCategories = async () => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`);
        setProducts(response?.data);

    } catch (error) {
        // setError(error?.message);
    } finally {
        // setLoading(false);
    }
};
    useEffect(() => {
        fetchCategories();

    }, [searchItem]);
  return (
    <nav className="bg-gradient-to-b from-red-900 to-red-950 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div onClick={handleNavigate} className="flex-shrink-0">
            <Link to="/">
              <img src="/src/assets/Logo.png" alt="Logo" className="md:h-8 h-5" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className=" px-3 py-1 rounded-full  hover:bg-gradient-to-b hover:from-gray-800 hover:to-red-800 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" px-3 py-1 rounded-full  hover:bg-gradient-to-b hover:from-gray-800 hover:to-red-800 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              About
            </Link>


            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className=" px-3 py-1 rounded-full  hover:bg-gradient-to-b hover:from-gray-800 hover:to-red-800 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none"
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
              className=" px-3 py-1 rounded-full  hover:bg-gradient-to-b hover:from-gray-800 hover:to-red-800 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              Contact
            </Link>
          </div>

          <div className="relative flex items-center justify-end space-x-4">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => { handleSearch(e) }}
              className="px-3 py-2 w-[110px] md:w-auto h-7 md:h-auto rounded-md text-gray-700 placeholder-gray-bg-green-600 focus:ring-2 focus:ring-green-bg-green-600 focus:outline-none"
            />
            <CartDrawer />
            {
              getItem ?
                <Link >
                  <div onClick={HandlelogOut} className="logout-btn md:p-3 p-1 text-white bg-red-600 rounded-md  cursor-pointer hover:bg-red-700 transition-all">
                    Log out
                  </div>
                </Link> :
                <Link to="/login">
                  <div className="button-29 md:p-3 p-1 text-white bg-red-600 rounded-md  cursor-pointer hover:bg-red-700 transition-all">
                    Login
                  </div>
                </Link>
            }

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
      <SearchModal products={products} searchItem={searchItem} isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Result">
        <p>This is a reusable modal component.</p>
      </SearchModal>
    </nav>
  );
};

export default Navbar;
