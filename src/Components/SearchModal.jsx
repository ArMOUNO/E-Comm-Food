import React from "react";

const SearchModal = ({ isOpen, onClose, title, children, searchItem, products }) => {
    if (!isOpen) return null;
    console.log(products)
    return (
        <div className=" absolute   z-30 swing-in-top-fwd right-0 flex items-center m-4 justify-center ">
            <div className="bg-gray-100 text-black shadow-lg p-6 rounded-lg border-x-2 border-red-800 w-[100%] md:w-[500px]">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div className="mb-4 max-h-[400px] space-y-2 overflow-y-auto">
                    {products?.meals?(
                        products?.meals?.map((item) => (
                        <div key={item?.idMeal} className="md:flex items-center gap-4 p-3 border rounded-lg shadow-sm bg-white">
                        
                            <img
                                src={item.strMealThumb}
                                alt={item.strMeal}
                                className="w-12 h-12 object-cover rounded-md shadow"
                            />

                          
                            <div className="flex-1">
                                <h1 className="text-xs font-bold text-red-700">{item.strMeal}</h1>
                                <p className="text-[10px] text-gray-600">Price ${item.idMeal}</p>
                                <p className="text-[11px] text-gray-500 mt-1 truncate w-40">{item.strInstructions}</p>
                            </div>

                        
                            <button className="text-xs bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded transition-all duration-300">
                                Add to cart
                            </button>
                        </div>
                    ))):<p className="text-red-800 text-lg font-bold">No item found</p>
                    }


                </div>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SearchModal;