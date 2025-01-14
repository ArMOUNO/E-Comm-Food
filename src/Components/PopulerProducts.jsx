import { useContext, useEffect, useState } from "react";
import CategoryFrame from "./Reusable/CategoryFrame";
import axios from "axios";
import ShowProducts from "./Reusable/ShowProducts";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../Context/CartContextProvider";

;

const PopulerProducts = () => {
    const navigate = useNavigate();
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleProductShow = (data) => {
        // console.log(data)
    }
    const { cartData, setCartData } = useContext(CartContext)

    const handleBuy = (data) => {
        setCartData((prevData)=>[...(prevData)||[],data])
    }
    // console.log(cartData)
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

    useEffect(() => {
        fetchCategories();

    }, []);
    return (
        <div>
            <section>
                <div className="flex justify-between">
                    <p className="text-2xl font-bold">Popular Products</p>
                    <p onClick={handleViewAllProduct} className="text-green-600 flex items-center cursor-pointer ">View All <span><FaArrowRight className="text-green-600 mx-2" /></span></p>
                </div>
                <div className="my-5 grid lg:grid-cols-7 gap-4 md:grid-cols-5 grid-cols-3 ">
                    {
                        loading ?
                            <>
                                {/* <SyncLoader color="#0bd33b" /> */}
                                Loading...
                            </> :
                            Products?.meals?.slice(0, 10)?.map((item, index) => (
                                <div onClick={() => { handleProductShow(item) }} key={index}>

                                    <ShowProducts
                                        image={item?.strMealThumb}
                                        name={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item.strMeal}
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

export default PopulerProducts;