import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader"; // Ensure this is installed
import NewOrderDesign from "../Components/NewOrderDesign"
import { toast } from 'keep-react';

const DetailsProduct = () => {
    const [products, setProducts] = useState(null);
    const [sameProducts, setSameProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setCartData } = useContext(CartContext)
    const { foodDetails } = useContext(CartContext);
    const foodID = foodDetails?.idMeal;


    const fetchFoodData = async () => {
        if (!foodID) return;
        setLoading(true);
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`
            );
            setProducts(response?.data?.meals?.[0]);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };


    const fetchSameCategory = async (category) => {
        if (!category) return;
        setLoading(true);
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );
            setSameProducts(response?.data?.meals || []);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchFoodData();
    }, [foodID]);

    useEffect(() => {
        if (products?.strCategory) {
            fetchSameCategory(products.strCategory);
        }
    }, [products?.strCategory]);

    const productReview = {
        reviews: [
            {
                id: 1,
                user: "John Doe",
                comment: "Amazing quality! Worth every penny.",
                rating: 5,
            },
            {
                id: 2,
                user: "Jane Smith",
                comment: "Great fit and comfortable.",
                rating: 4,
            },
        ],
    };
    const handleBuy = () => {

        try {
            setCartData((prevData) => {

                const existingItemIndex = prevData?.findIndex(item => item?.idMeal === products?.idMeal);
                if (existingItemIndex !== -1) {
                    const updatedData = [...prevData];
                    updatedData[existingItemIndex].count += 1;
                    return updatedData;
                } else {
                    return [...(prevData || []), { ...products, count: 1 }];
                }
            });

            toast.success(`${products?.strMeal} has been added`);
        } catch (error) {
            toast.error('Something bad happened');
            console.error("Error in handleBuy:", error);
        }
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center py-10">
                    <HashLoader color="#c80d0d" />
                </div>
            ) : error ? (
                <p className="text-center text-red-500 font-bold">{error}</p>
            ) : products ? (
                <div className="min-h-screen bg-white py-8">
                    <div className="container mx-auto bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl">
                        <div className="flex bg-yellow-50 shadow-2xl flex-col md:flex-row">

                            <div className="md:w-1/2">
                                <img
                                    src={products.strMealThumb}
                                    alt={products.strMeal}
                                    className="w-full h-80 object-cover md:h-full"
                                />
                            </div>


                            <div className="md:w-1/2 p-6">
                                <h1 className="text-4xl font-bold text-red-700 mb-4">
                                    {products.strMeal}
                                </h1>
                                <p className="text-2xl text-gray-700 font-semibold mb-4">

                                    Price: ${products.idMeal.toString().slice(-2)}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {products.strInstructions}
                                </p>
                                <button onClick={handleBuy} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>


                        <div className="bg-red-100 p-6">
                            <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                Product Highlights
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {[1, 2, 3, 4].map((num) => (
                                    products[`strIngredient${num}`] && (
                                        <li key={num}>{products[`strIngredient${num}`]}</li>
                                    )
                                ))}
                            </ul>
                        </div>

                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-red-600 mb-4">
                                Customer Reviews
                            </h2>
                            <div className="space-y-4">
                                {productReview?.reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-red-50 p-4 rounded-lg shadow-md flex items-start space-x-4"
                                    >
                                        <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                                            {review.user[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{review.user}</h3>
                                            <p className="text-gray-600">{review.comment}</p>
                                            <div className="text-yellow-500">
                                                {"★".repeat(review.rating)}
                                                {"☆".repeat(5 - review.rating)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="bg-white">
                        <h2 className="text-2xl font-bold font-serif my-5 text-red-600 bg-red-50 p-4 rounded-md">
                            You Might Also Like
                        </h2>
                        <div className="flex justify-center space-x-4 overflow-x-auto">
                            <div className="my-11 grid lg:grid-cols-7 xl:grid-cols-8 md:gap-y-20 gap-y-10 gap-10 md:grid-cols-5 grid-cols-3">
                                {sameProducts.length === 0 ? (
                                    <p className="text-gray-500 text-center">No related products found.</p>
                                ) : (
                                    sameProducts.map((item, index) => (
                                        <div className="mt-3" key={index}>
                                            <NewOrderDesign
                                                img={item?.strMealThumb}
                                                item={
                                                    item.strMeal.length > 10
                                                        ? `${item.strMeal.substring(0, 10)}...`
                                                        : item.strMeal
                                                }
                                                price={item?.idMeal}
                                                onBuy={() => {
                                                    console.log("Buy clicked", item);
                                                }}
                                                itemViewClick={() => {
                                                    console.log("View clicked", item);
                                                }}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">No product details available.</p>
            )}
        </>
    );
};

export default DetailsProduct;
