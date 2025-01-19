import { BsGooglePlay } from "react-icons/bs";
import { HiCloudDownload } from "react-icons/hi";
import { IoMdHeart } from "react-icons/io";
import NewOrderDesign from "../Components/NewOrderDesign";

const AboutPage = () => {
    return (
        <div>
            <section>
                <div className="grid lg:grid-cols-2 my-3">
                <div className="md:w-[70%]  flex flex-col ">
                <img className="w-[200px] h-[130px]" src="/src/assets/AboutTop.png" alt="" />
                <div className="flex items-center my-2 rounded-full bg-red-100 p-1 px-3 w-fit">
                <IoMdHeart className="text-2xl text-green-600 bg-red-700 p-1 rounded-full mx-1" />
                 <span>People Trust us</span>
                </div>
                    <p className="text-7xl font-serif">We're <span className="text-red-700">Serious</span>  For <span className="text-red-700">Food</span>  & Delivery.</p>
                    <p className="flex justify-end mt-1"><img src="/src/assets/Decore.png" alt="" /></p>
                    <p className="text-2xl my-2 font-serif text-gray-600">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                    <div className="flex items-center space-x-4 my-5">
                        <button className="bg-red-400 shadow-red-500 hover:bg-green-900 p-1 flex items-center text-white rounded-full px-4"><HiCloudDownload className="mx-2 text-xl text-green-700" />Download App</button>
                        <button className="bg-red-400 shadow-red-500 hover:bg-green-900 p-1 flex items-center text-white rounded-full px-4"><BsGooglePlay className="text-green-700  mx-2" />Play Video</button>
                    </div>
                </div>
                    <img src="/src/assets/AboutUs.png" alt="" />
                </div>
            </section>
            <div className="my-5">
    
            </div>
        </div>
    );
};

export default AboutPage;