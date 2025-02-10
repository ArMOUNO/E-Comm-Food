import { useContext, useEffect, useState } from "react";
import OfferItems from "./Reusable/OfferItems";
import { toast } from "keep-react";
import { CartContext } from "../Context/CartContextProvider";
import axios from "axios";
import { PiFlagPennantFill } from "react-icons/pi";
const TodayOffer = () => {
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleProductShow = (data) => {
        // console.log(data)
    }
    const { cartData, setCartData } = useContext(CartContext)


    const handleBuy = (data) => {
        try {
            setCartData((prevData) => {

                const existingItemIndex = prevData?.findIndex(item => item?.idMeal === data?.idMeal);
                if (existingItemIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingItemIndex].count += 1;
                    return updatedData;
                } else {
                    return [...(prevData || []), { ...data, count: 1 }];
                }
            });

            toast.success(`${data?.strMeal} has been added`);
        } catch (error) {
            toast.error('Something bad happened');
            console.error("Error in handleBuy:", error);
        }
    };



    const fetchOfferFood = async () => {
        try {
            const response = await axios.get("https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
            setProducts(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const HandleAddCart = (data) => {
        try {
            setCartData((prevData) => {
            
                const existingItemIndex = prevData?.findIndex(item => item?.idMeal === data?.idMeal);
                if (existingItemIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingItemIndex].count += 1;
                    return updatedData;
                } else {             
                    return [...(prevData || []), { ...data, count: 1 }];
                }
            });
 
            toast.success(`${data?.strMeal} has been added`);
        } catch (error) {
            toast.error('Something bad happened');
            console.error("Error in handleBuy:", error);
        }
    }

    useEffect(() => {
        fetchOfferFood();

    }, []);
    return (
        <div className="relative bg-gradient-to-r  from-white to-red-100 p-2 rounded-md">
            <div className="relative w-fit mx-auto">
                <p className="text-gray-600 font-bold text-center mt-4 mb-6 text-3xl md:text-5xl font-mono ">Today <span className="text-red-500">Special</span> Offer</p>
                <PiFlagPennantFill className="absolute text-red-600 top-[-80px] left-[-6rem]" size={140} />
            </div>
            <img className="absolute md:w-[60%] lg:w-[50%] xl:w-[30%] md:top-[-100px] md:right-[-180px] lg:block hidden  lg:top-[-140px] lg:right-0 opacity-100" src="/src/assets/offerSec.png" alt="" />
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6  2xl:grid-cols-9 ">
                {
                    Products?.meals?.map((item) => (
                        <OfferItems
                            key={item?.idMeal}
                            title={item?.strMeal}
                            img={item?.strMealThumb}
                            oldPrice={item?.idMeal}
                            NewPrice={item?.idMeal ? `${Math.round(item.idMeal * 0.3)}` : 'No Price Available'}
                            handleCart={() => { HandleAddCart(item) }}

                        />
                    ))
                }



            </div>
        </div>
    );
};

export default TodayOffer;