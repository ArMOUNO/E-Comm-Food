import { BsGooglePlay } from "react-icons/bs";
import { HiCloudDownload } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import { FaCheckCircle, FaUsers, FaClock } from "react-icons/fa";
import NewOrderDesign from "../Components/NewOrderDesign";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate();

    const handleOrderNow = () => {
        navigate("/"); // Navigate to Home
        setTimeout(() => {
            const popularSection = document.getElementById("popular-products");
            if (popularSection) {
                popularSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Wait for navigation to complete
    };
    return (
        <div className="">
            {/* About Section */}
            <section>
                <div className="grid lg:grid-cols-2 my-3 gap-6">
                    {/* Left Side Content */}
                    <div className="md:w-[70%] flex flex-col">
                        <img className="w-[200px] h-[130px]" src="/src/assets/AboutTop.png" alt="" />
                        <div className="flex items-center my-2 rounded-full bg-red-100 p-1 px-3 w-fit">
                            <IoMdHeart className="text-2xl text-green-600 bg-red-700 p-1 rounded-full mx-1" />
                            <span>People Trust Us</span>
                        </div>
                        <h1 className="text-7xl font-serif">
                            We're <span className="text-red-700">Serious</span> For <span className="text-red-700">Food</span> & Delivery.
                        </h1>
                        <p className="flex justify-end mt-1">
                            <img src="/src/assets/Decore.png" alt="" />
                        </p>
                        <p className="text-2xl my-2 font-serif text-gray-600">
                            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                        </p>
                        <div className="flex items-center space-x-4 my-5">
                            <button className="bg-red-400 shadow-red-500 hover:bg-green-900 p-1 flex items-center text-white rounded-full px-4">
                                <HiCloudDownload className="mx-2 text-xl text-green-700" /> Download App
                            </button>
                            <button className="bg-red-400 shadow-red-500 hover:bg-green-900 p-1 flex items-center text-white rounded-full px-4">
                                <BsGooglePlay className="text-green-700 mx-2" /> Play Video
                            </button>
                        </div>
                    </div>
                    {/* Right Side Image */}
                    <img src="/src/assets/AboutUs.png" alt="" />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="my-10 bg-gray-100 p-10 rounded-xl bg-cover bg-[url('/src/assets/contyact.png')]">
                <h2 className="text-4xl font-serif text-center text-red-700">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <FaCheckCircle className="text-red-700 text-4xl mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Best Quality</h3>
                        <p className="text-gray-600">We ensure fresh ingredients and delicious taste with every order.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <FaClock className="text-red-700 text-4xl mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Fast Delivery</h3>
                        <p className="text-gray-600">We deliver within 60 minutes, ensuring hot and fresh food.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <FaUsers className="text-red-700 text-4xl mx-auto mb-3" />
                        <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
                        <p className="text-gray-600">Over 10,000+ happy customers trust our food delivery service.</p>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}


            {/* How It Works Section */}
            <section className="my-10 bg-gray-100 p-10 rounded-xl bg-cover bg-[url('/src/assets/fsushi.png')]">
                <div className="bg-red-50 bg-opacity-50 p-7 rounded-md">
                    <h2 className="text-4xl font-serif text-center text-red-700">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">1. Choose Your Meal</h3>
                            <p className="text-gray-600">Browse our menu and pick your favorite dishes.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">2. Place Your Order</h3>
                            <p className="text-gray-600">Order online or through our app with just a few clicks.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">3. Enjoy Fast Delivery</h3>
                            <p className="text-gray-600">Receive your hot and fresh food at your doorstep.</p>
                        </div>
                    </div>
                </div>
                <section className="my-10 bg-red-50 bg-opacity-50 p-7 rounded-md">
                    <h2 className="text-4xl font-serif text-center text-red-700">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <p className="text-gray-600">
                                "The food is always fresh and arrives hot. The delivery is super fast, and I love the variety of meals available!"
                            </p>
                            <h3 className="mt-4 font-semibold text-red-700">- John Doe</h3>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <p className="text-gray-600">
                                "One of the best food delivery services I have used! The quality is amazing, and the service is top-notch."
                            </p>
                            <h3 className="mt-4 font-semibold text-red-700">- Sarah Williams</h3>
                        </div>
                    </div>
                </section>
            </section>

            {/* Join Us Section */}
            <section className="text-center my-10">
                <h2 className="text-4xl font-serif text-red-700">Join Thousands of Happy Customers</h2>
                <p className="text-xl text-gray-600 mt-2">Order now and enjoy a world-class food delivery experience.</p>
                <div className="flex justify-center mt-6">
                    <button onClick={handleOrderNow} className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg">
                        Order Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
