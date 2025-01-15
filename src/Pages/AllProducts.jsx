import { useContext, useEffect, useState } from "react";
import ShowProducts from "../Components/Reusable/ShowProducts";
import axios from "axios";
import { CartContext } from "../Context/CartContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "keep-react";

const AllProducts = () => {
    const navigate = useNavigate();
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
                    <p className="text-2xl font-bold">All Products</p>                  
                </div>
                <div className="my-5 grid lg:grid-cols-7 gap-4  md:grid-cols-5 grid-cols-3 ">
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
                                        name={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item?.strMeal}
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