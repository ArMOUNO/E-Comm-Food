import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import { HashLoader } from 'react-spinners';
import axios from 'axios';
import NewOrderDesign from '../Components/NewOrderDesign';
import { toast } from 'keep-react';
import { useNavigate } from 'react-router-dom';


const FoodByCategory = () => {
    const { category } = useContext(CartContext)
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const ItemCategory = category?.strCategory



    const fetchCategories = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${ItemCategory}`);
            setProducts(response?.data);

        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const { cartData, setCartData } = useContext(CartContext)
    const { setFoodDetails, } = useContext(CartContext)
    const navigate = useNavigate()
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
    const handleDetails = (data) => {
        setFoodDetails(data)
        navigate('/details');
    }
    useEffect(() => {
        fetchCategories();

    }, []);

    return (
        <div>
            {
                loading ?
                    <>
                        <div className="flex justify-center w-full mx-auto col-span-7 my-5">
                            <HashLoader color="#c80d0d" />
                        </div>
                    </> :
                    <>
                        <p className="text-white bounce-top text-2xl my-2 relative font-serif text-center bg-gradient-to-r from-red-500 to-red-300 px-6 py-4 rounded-lg shadow-lg uppercase tracking-wider">
                            {`  Our Delicious ${ItemCategory} Item`}
                            <img className='w-11 absolute top-1 right-1' src="/src/assets/leaf.png" alt="" />
                        </p>

                        <div className='my-9 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3'>
                            {
                                Products?.meals?.map((item, index) => (
                                    <div className="mt-14 " key={index}>

                                        <NewOrderDesign
                                            itemViewClick={() => { handleDetails(item) }}
                                            img={item?.strMealThumb}
                                            item={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item?.strMeal}
                                            price={item?.idMeal}
                                            onBuy={() => { handleBuy(item) }}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    </>
            }
        </div>
    );
};

export default FoodByCategory;