import { useEffect, useState } from "react";
import ShowProducts from "../Components/Reusable/ShowProducts";
import axios from "axios";

const AllProducts = () => {
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleCategoryShow = () => {

    }

    const handleBuy = () => {

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
                    <p className="text-2xl font-bold">All Menu</p>
                   
                </div>
                <div className="my-5 grid lg:grid-cols-7 gap-4 md:grid-cols-5 grid-cols-3 ">
                    {
                        loading ?
                            <>
                                <SyncLoader color="#0bd33b" />
                                Loading...
                            </> :
                            Products?.meals?.map((item, index) => (
                                <div onClick={() => { handleCategoryShow(item) }} key={index}>

                                    <ShowProducts
                                        image={item?.strMealThumb}
                                        name={item.strMeal?.length > 10 ? `${item.strMeal.substring(0, 10)}...` : item.strMeal}
                                        price={item?.idMeal}
                                        onBuy={handleBuy}
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