import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from "../Context/CartContextProvider";
import { toast } from "keep-react";
import NewOrderDesign from "./NewOrderDesign";
import { HashLoader } from "react-spinners";


const PopulerProducts = () => {
    const navigate = useNavigate();
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToPopular) {
            document.getElementById("popular-products")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleProductShow = (data) => {
        // console.log(data)
    }
    const { cartData, setCartData } = useContext(CartContext)
    const { setFoodDetails,}=useContext(CartContext)

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



    const handleViewAllProduct = () => {
        navigate('/all-products');
    }
    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            setProducts(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const handleDetails = (data) => {
        setFoodDetails(data)
        navigate('/details');
    }
 
    useEffect(() => {
        fetchCategories();

    }, []);
    return (
        <div>
            <section id="popular-products">
                <div className="flex justify-between bg-gradient-to-r from-red-100 to-red-50 bg-red-50 p-2 rounded-md">
                    <p className="text-2xl font-bold">Popular Products</p>
                    <p onClick={handleViewAllProduct} className="button-87 p-2 px-4 rounded-md text-sm flex items-center cursor-pointer ">View All </p>
                </div>
                <div className="my-11 grid-container gap-3">
                    {
                        loading ?
                            <>
                                <div className="flex justify-center w-full mx-auto col-span-10">
                                    <HashLoader color="#c80d0d" />
                                </div>
                            </> :
                            Products?.meals?.slice(0, 10)?.map((item, index) => (
                                <div className="mt-10" onClick={() => { handleProductShow(item) }} key={index}>

                                    <NewOrderDesign
                                        img={item?.strMealThumb}
                                        item={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item?.strMeal}
                                        price={item?.idMeal}
                                        onBuy={() => { handleBuy(item) }}
                                        itemViewClick={() => { handleDetails(item) }}
                                    />
                                </div>
                            ))
                    }


                </div>

            </section>
        </div>
    );
};

export default PopulerProducts;