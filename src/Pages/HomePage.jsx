import { FaArrowRight } from "react-icons/fa6";
import Categories from "../Components/Categories";
import PopulerProducts from "../Components/PopulerProducts";
import TodayOffer from "../Components/TodayOffer";
import CuponOffer from "../Components/CuponOffer";
import heroBanner from "/src/assets/Hungry Food Drink Sticker.gif";
const HomePage = () => {
  return (
    <>
      {/* <div className="grid lg:grid-cols-8 grid-cols-2 gap-2  md:my-4 "> */}
      <div className="">
        <section className="flex  md:flex-row flex-col-reverse justify-around lg:mx-[10%] items-center my-4">
          <div>
            <div className="leading-tight text-2xl md:text-7xl lg:text-[8vh] w-full md:w-[65%]  text-black font-bold ">
              Claim Best Offer on Fast{" "}
              <span className="text-red-800 font-serif">Food</span> &{" "}
              <span className="text-red-800 font-serif">Restaurants</span>{" "}
            </div>
            <p className="md:text-2xl my-2">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery
            </p>
            <div className="flex items-end space-x-7">
              <button className="bg-red-600 px-4 py-2 rounded-full text-white text-lg">
                Get Started
              </button>
              <img
                className="w-16"
                src={heroBanner}
                alt=""
              />
            </div>
          </div>

          <div>
            {" "}
            <img
              className=" shadow-red-600 rounded-full bg-opacity-5 w-[2400px]"
              src="/src/assets/newBanner.png"
              alt=""
            />
          </div>
        </section>
        {/* <div className="flex items-center mt-3 md:mt-0 md:rounded-md py-20 relative lg:col-span-5 col-span-2 row-span-2 bg-cover bg-center bg-no-repeat h-[500px] md:h-auto"
                    style={{ backgroundImage: "url('/src/assets/Bannar Big.png')" }}
                >
    
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

                </div> */}
        {/* <div className="rounded-md bg-cover bg-center bg-no-repeat h-full md:h-auto lg:col-span-3" style={{ backgroundImage: "url('/src/assets/Bannar2.png')" }}>

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
                </div> */}
      </div>
      <div className="bg-red-100 my-2 py-1 rounded-md">
        <p className="text-2xl text-center mt-4 font-sans text-red-700">
          WHAT WE SERVE
        </p>
        <p className="text-[3vh] text-center ">
          Your Favorite Food Delivery Partner
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around  md:my-4 bg-white shadow-md px-3 py-7">
        <div className="flex md:items-center items-start space-x-2">
          <img
            className="w-[100px] md:w-full"
            src="/src/assets/delivery-truck 1 .png"
            alt=""
          />
          <div>
            <p className="md:text-2xl text-lg font-bold">Free Shipping</p>
            <p className="md:text-2xl text-gray-500">
              Free shipping on all your order
            </p>
          </div>
        </div>
        {/* <div className="flex md:items-center items-start space-x-2">
                    <img src="/src/assets/headphones 1.png" alt="" />
                    <div>
                        <p className="md:text-2xl text-lg font-bold">Customer Support 24/7</p>
                        <p className="md:text-2xl text-gray-500">Instant access to Support</p>
                    </div>
                </div> */}
        <div className="flex md:items-center items-start space-x-2">
          <img
            className="w-[100px] md:w-full"
            src="/src/assets/Order food-pana 1.png"
            alt=""
          />
          <div>
            <p className="md:text-2xl text-lg font-bold">Easy To Order</p>
            <p className="md:text-2xl text-gray-500">
              You only need a few steps in ordering food
            </p>
          </div>
        </div>
        <div className="flex md:items-center items-start space-x-2">
          <img
            className="w-[100px] md:w-full"
            src="/src/assets/Waiters-rafiki 1.png"
            alt=""
          />
          <div>
            <p className="md:text-2xl text-lg font-bold">Best Quality</p>
            <p className="md:text-2xl text-gray-500">
              Not only fast for us quality is also number one
            </p>
          </div>
        </div>
      </div>
      <Categories />
      <PopulerProducts />
      <TodayOffer />
      <CuponOffer />
    </>
  );
};

export default HomePage;
