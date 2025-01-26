import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">EcoBazar</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-gray-700 mr-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-700 mr-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-700 mr-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <ul className="text-gray-600">
            <li><a href="#" className="hover:text-gray-700">About Us</a></li>
            <li><a href="#" className="hover:text-gray-700">Service Us</a></li>
            <li><a href="#" className="hover:text-gray-700">Contact</a></li>
            <li><a href="#" className="hover:text-gray-700">Company</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="text-gray-600">
            <li><a href="#" className="hover:text-gray-700">Partnership</a></li>
            <li><a href="#" className="hover:text-gray-700">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gray-700">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-700">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <div className="mt-4 space-x-2 md:space-x-0">
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 my-2 ">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-4 border-t border-gray-200">
        Copyright © 2022 Foodhut.
      </div>
    </footer>
  );
};

export default Footer;