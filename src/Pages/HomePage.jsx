
import { FaArrowRight } from "react-icons/fa6";
import Categories from "../Components/Categories";
import PopulerProducts from "../Components/PopulerProducts";

const HomePage = () => {
    return (
        <>
            <div className="grid lg:grid-cols-8 grid-cols-2 gap-2  md:my-4 ">
                <div className="flex items-center mt-3 md:mt-0 md:rounded-md py-20 relative lg:col-span-5 col-span-2 row-span-2 bg-cover bg-center bg-no-repeat h-[500px] md:h-auto"
                    style={{ backgroundImage: "url('/src/assets/Bannar Big.png')" }}
                >
                    {/* <img src="/src/assets/Bannar Big.png" className="cover" alt="" /> */}
                    <div className="mx-3  space-y-6 md:p-4 p-1 ">
                        <p className="text-[5vh] leading-10 w-full md:w-[65%] text-xl text-white font-bold ">Fresh & Healthy
                            Organic Food
                        </p>
                        <p className=" text-2xl  text-white"> Sale Up to
                            <span className="w-fit mx-2 bg-yellow-600 text-white rounded-md p-2 text-2xl">30% Off</span>
                        </p>
                        <p className="items-center text-xl font-bold md:font-thin top-[360px] text-white md:text-white">Free shipping on all your order.</p>
                        <button className="bg-white flex space-x-2 hover:bg-red-950 hover:text-white text-sm absolute items-center   text-green-700 rounded-full p-3">
                            Shop Now <FaArrowRight className="mx-1" />
                        </button>
                    </div>

                </div>
                <div className="rounded-md bg-cover bg-center bg-no-repeat h-full md:h-auto lg:col-span-3" style={{ backgroundImage: "url('/src/assets/Bannar2.png')" }}>

                    <div className="lg:py-20 mx-4 h-full">
                        <p className="md:text-[2vh] text-sm">Summer Sale</p>
                        <p className="md:text-[3vh] text-lg leading-10 ">75% Off</p>
                        <p className="md:text-[2vh] text-sm text-gray-600">Only Fruit & Vegetable</p>
                        <button className=" flex space-x-2 hover:text-red-950  text-lg absolute items-center   text-green-700  ">
                            Shop Now <FaArrowRight className="mx-1" />
                        </button>
                    </div>
                </div>
                <div className="rounded-md lg:col-span-3 lg:col-start-6">
                    <img className="w-full" src="/src/assets/Banner3.png" alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2  md:my-4 bg-white shadow-md px-3 py-7">
                <div className="flex md:items-center items-start space-x-2">
                    <img src="/src/assets/delivery-truck 1.png" alt="" />
                    <div>
                        <p className="text-lg font-bold">Free Shipping</p>
                        <p className="text-gray-500">Free shipping on all your order</p>
                    </div>
                </div>
                <div className="flex md:items-center items-start space-x-2">
                    <img src="/src/assets/headphones 1.png" alt="" />
                    <div>
                        <p className="text-lg font-bold">Customer Support 24/7</p>
                        <p className="text-gray-500">Instant access to Support</p>
                    </div>
                </div>
                <div className="flex md:items-center items-start space-x-2">
                    <img src="/src/assets/cart.png" alt="" />
                    <div>
                        <p className="text-lg font-bold">100% Secure Payment</p>
                        <p className="text-gray-500">We ensure your money is save</p>
                    </div>
                </div>
                <div className="flex md:items-center items-start space-x-2">
                    <img src="/src/assets/cart.png" alt="" />
                    <div>
                        <p className="text-lg font-bold">Money-Back Guarantee</p>
                        <p className="text-gray-500">30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
            <Categories/>
            <PopulerProducts/>
        </>
    );
};

export default HomePage;