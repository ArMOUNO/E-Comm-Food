import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { BsCartDashFill } from "react-icons/bs";

const ShowCartData = () => {
    const { cartData } = useContext(CartContext)
    console.log("ok", cartData)
    return (
        <>
            <div className="flex justify-between items-start border-y-2 border-green-900 my-3 py-3">
                <img className="w-16" src="/src/assets/box.png" alt="" />
                <div>
                    <div className="flex items-center space-x-6">
                        <p className="text-2xl">Product Title:</p>
                        <p className="text-xl text-error-800 font-bold ">Price:</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <p className=" button-92 rounded-full w-fit text-sm flex items-center"><BsCartDashFill className="text-3xl mx-2 text-red-700" />Remove</p>
                        <p className="text-xl text-error-800 font-bold ">Order Now</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowCartData;