import CategoryFrame from "./Reusable/CategoryFrame";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowProducts from "./Reusable/ShowProducts";
import { HashLoader } from "react-spinners";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
            setCategories(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https:www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            setProducts(response?.data);
        } catch (error) {
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    };


    const handleCategoryShow = (data) => {
        console.log(data)
    }


    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);
    // console.log(categories)
    return (
        <>
            <section>
                <p className="text-2xl font-bold">Popular Categories</p>
                <div className="my-5 grid lg:grid-cols-9 gap-4 md:grid-cols-6 grid-cols-3 ">
                    {
                        loading ?
                            <>
                            <div className="flex justify-center w-full mx-auto col-span-8">
                                    <HashLoader color="#c80d0d" />
                                </div>
                            </> :
                            categories?.categories?.map((item, index) => (
                                <div onClick={() => { handleCategoryShow(item) }} key={index}>
                                    <ShowProducts
                                        key={index}
                                        image={item?.strCategoryThumb}
                                        name={item?.strCategory}

                                    />
                                </div>
                            ))
                    }


                </div>
            </section>
            

        </>
    );
};

export default Categories;