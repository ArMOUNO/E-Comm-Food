import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { BsCartDashFill } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { HiPlusSm } from "react-icons/hi";
const ShowCartData = ({ price, title, img, handleRemoveOrder, handleDoOrder, handleIncrement, handledecrement,quantity }) => {
    const { cartData } = useContext(CartContext);
    console.log("ok", cartData);

    return (
        <div className="bg-white shadow-md rounded-lg border border-gray-300 p-2 my-1">
            <div className="flex items-start space-x-5">
                <img
                    className="w-20 h-20 p-1 object-cover rounded-md "
                    src={img}
                    alt="Product"
                />
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-red-600 mt-2">Price: ${price}</p>
                        <div className="flex items-center mt-1  text-xs text-gray-500 font-bold">
                            <span className="mx-2">Quantity</span>
                            <HiMinusSm
                                onClick={handledecrement} className="text-xl cursor-pointer bg-red-100 rounded-full p-1 transition-all duration-200 ease-in-out hover:text-2xl hover:bg-red-200"
                            />
                            <span className="text-lg mb-1 text-red-800 mx-2">{quantity}</span>
                            <HiPlusSm
                                onClick={handleIncrement} className="text-xl cursor-pointer bg-green-100 rounded-full p-1 transition-all duration-200 ease-in-out hover:text-2xl hover:bg-green-200"
                            />

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-end  ">

                <div className="flex space-x-4">
                    <button
                        onClick={handleRemoveOrder}
                        className="flex items-center text-red-700 bg-red-100 hover:bg-red-200 rounded-full px-4 py-2 text-sm font-medium transition shadow">
                        <BsCartDashFill className="text-xl mr-2" />
                        Remove
                    </button>
                    <button
                        onClick={handleDoOrder}
                        className="flex items-center text-green-700 bg-green-100 hover:bg-green-200 rounded-full px-4 py-2 text-sm font-medium transition shadow">
                        <IoMdCheckmarkCircleOutline className="text-xl mr-2" />
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowCartData;
