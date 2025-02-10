import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted!");
  };

  return (
    <div className="shadow-lg   flex justify-center  min-h-screen bg-center backdrop-blur-sm bg-cover bg-[url('/src/assets/contyact.png')]">
    <div className="flex flex-col bg-gray-50 bg-opacity-80 shadow-xl h-fit  rounded-md w-fit my-10 justify-center p-6">
      <p className="text-4xl text-red-700 my-3 text-center font-bold">Contact Us</p>
      <div className="flex items-center my-5 rounded-md justify-center">
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-[700px] max-w-md relative shadow-lg border border-gray-300 bg-[url('/src/assets/plate.png')]">
            {/* Floating Decoration */}
            <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 bg-red-500 text-white px-3 py-1 rounded-lg shadow-md">
              Let's Talk! 📞
            </div>
  
            <div className="flex flex-col items-center w-full backdrop-blur-md rounded-md my-3 bg-opacity-30">
              <img className="w-24 animate-pulse" src="/src/assets/plant 1.png" alt="plant" />
              <h2 className="text-2xl font-semibold text-red-600 text-center mb-6">
                Get in Touch
              </h2>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-red-400 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none peer"
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-700 left-4 top-0 transform -translate-y-1/2 bg-red-100 px-1 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-red-500 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
  
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-red-400 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none peer"
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-700 left-4 top-0 transform -translate-y-1/2 bg-red-100 px-1 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-red-500 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 hover:scale-105 transition duration-300"
                >
                  Submit
                </button>
                <p className="text-xs text-gray-600 mt-2">We'll get back to you within 24 hours!</p>
              </div>
  
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:scale-110 transition duration-200">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-blue-400 hover:scale-110 transition duration-200">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-blue-700 hover:scale-110 transition duration-200">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
  
        {/* Contact Image */}
        <div>
          <div className="flex flex-col lg:block hidden items-center">
            <img className="w-[700px] " src="/src/assets/contact.png" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
