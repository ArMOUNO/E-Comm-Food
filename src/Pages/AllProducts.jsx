import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { CartContext } from "../Context/CartContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "keep-react";
import NewOrderDesign from "../Components/NewOrderDesign";
import { HashLoader, SyncLoader } from 'react-spinners';
const AllProducts = () => {
    const navigate = useNavigate();
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        fetchCategories();

    }, []);
    return (
        <div>
            <section>
                <div className="flex justify-between">
                <p className="text-white bounce-top text-2xl my-2 w-full relative font-serif text-center bg-gradient-to-r from-red-500 to-red-300 px-6 py-4 rounded-lg shadow-lg uppercase tracking-wider">
                            Choose your favorite Item
                            <img className='w-11 absolute top-1 right-1' src="/assets/leaf.png" alt="" />
                        </p>
                </div>
                <div className="my-5 grid lg:grid-cols-7 gap-4  md:grid-cols-5 grid-cols-3 ">
                    {
                        loading ?
                            <>
                                <div className="flex justify-center w-full mx-auto col-span-7 my-5">
                                    <HashLoader color="#c80d0d" />
                                </div>
                            </> :
                            Products?.meals?.map((item, index) => (
                                <div className="mt-14" onClick={() => { handleProductShow(item) }} key={index}>

                                    <NewOrderDesign
                                        img={item?.strMealThumb}
                                        item={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item?.strMeal}
                                        price={item?.idMeal}
                                        onBuy={() => { handleBuy(item) }}
                                    />
                                </div>
                            ))
                    }


                </div>

            </section>
        </div>
    );
};


export default AllProducts;