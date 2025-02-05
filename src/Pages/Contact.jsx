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
    <div className="shadow-lg bg-red-50  flex justify-center">

      <div className="flex flex-col bg-white shadow-lg rounded-md w-fit my-5 justify-center ">
        <p className="text-4xl text-red-700 text-center  font-bold">
          Contact Us
        </p>
        <div className="flex items-center my-5 rounded-md justify-center">
          <div className=" flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg  w-[700px] max-w-md  bg-[url('/src/assets/plate.png')] ">
              <h2 className="text-2xl font-semibold text-red-600 text-center mb-6">
                Contact Us
              </h2>
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
                    className="absolute text-sm text-gray-700 rounded-[5px] left-4 top-0 transform -translate-y-1/2 bg-red-100 px-1 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-red-500 peer-focus:text-sm"
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
                    className="absolute text-sm text-gray-700 rounded-[5px] left-4 top-0 transform -translate-y-1/2 bg-red-100 px-1 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-red-500 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:block hidden items-center">
              <img className="w-[700px]" src="/src/assets/contact.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
