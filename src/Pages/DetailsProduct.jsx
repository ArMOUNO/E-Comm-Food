
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import axios from 'axios';

const DetailsProduct = () => {
    const [Products, setProducts] = useState([]);
    const [sameProducts, setSameProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { foodDetails } = useContext(CartContext)
    const foodID = foodDetails?.idMeal
    const Categry = Products?.meals?.map((item) => item?.strCategory)
    const cat=Categry?.[0]
    console.log(Categry)
    const fetchFoodData = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`);
            setProducts(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const fetchSameCategry = async () => {
 
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
            setSameProducts(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFoodData();
        fetchSameCategry();

    }, []);
    const productReview = {

        reviews: [
            { id: 1, user: "John Doe", comment: "Amazing quality! Worth every penny.", rating: 5 },
            { id: 2, user: "Jane Smith", comment: "Great fit and comfortable.", rating: 4 },
        ],
        relatedProducts: [
            { id: 2, name: "Classic Denim Jacket", price: "$149.99", image: "https://via.placeholder.com/200x200.png?text=Denim+Jacket" },
            { id: 3, name: "Winter Coat", price: "$249.99", image: "https://via.placeholder.com/200x200.png?text=Winter+Coat" },
        ],
    };

    console.log(Products)
    return (
        <>
            {
                Products?.meals?.map((SingleProduct) => (
                    <div key={SingleProduct?.idMeal} className="min-h-screen bg-red-50 py-8">

                        <div className="container mx-auto bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl">
                            <div className="flex flex-col md:flex-row">

                                <div className="md:w-1/2">
                                    <img
                                        src={SingleProduct?.strMealThumb}
                                        alt={SingleProduct?.strMeal}
                                        className="w-full h-80 object-cover md:h-full"
                                    />
                                </div>


                                <div className="md:w-1/2 p-6">
                                    <h1 className="text-4xl font-bold text-red-700 mb-4">{SingleProduct?.strMeal}</h1>
                                    <p className="text-2xl text-gray-700 font-semibold mb-4">
                                       $ {SingleProduct?.idMeal}
                                    </p>
                                    <p className="text-gray-600 mb-6">{SingleProduct?.strInstructions}</p>
                                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-md">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>


                            <div className="bg-red-100 p-6">
                                <h2 className="text-2xl font-semibold text-red-600 mb-4">Product Highlights</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">

                                    <li >{SingleProduct?.strIngredient1}</li>
                                    <li >{SingleProduct?.strIngredient2}</li>
                                    <li >{SingleProduct?.strIngredient3}</li>
                                    <li >{SingleProduct?.strIngredient4}</li>

                                </ul>
                            </div>


                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-red-600 mb-4">Customer Reviews</h2>
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

                            <div className="bg-red-50 p-6">
                                <h2 className="text-2xl font-semibold text-red-600 mb-4">You Might Also Like</h2>
                                <div className="flex space-x-4 overflow-x-auto">
                                    {sameProducts?.relatedProducts?.map((related) => (
                                        <div
                                            key={related?.idMeal}
                                            className="bg-white rounded-lg shadow-md overflow-hidden w-48 flex-shrink-0"
                                        >
                                            <img
                                                src={related?.strMealThumb}
                                                alt={related?.name}
                                                className="w-full h-32 object-cover"
                                            />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {related?.strMeal}
                                                </h3>
                                                <p className="text-red-600 font-bold">{related?.idMeal}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
};

export default DetailsProduct;
