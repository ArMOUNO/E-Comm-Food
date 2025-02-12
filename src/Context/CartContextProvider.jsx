import { createContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

const getSavedData = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
};

const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(() => getSavedData("cartData", []));
    const [category, setCategory] = useState(() => getSavedData("category", []));
    const [foodDetails,setFoodDetails]=useState(() => getSavedData("foodDetails", []));

    useEffect(() => {
        try {
            localStorage.setItem("cartData", JSON.stringify(cartData));
            localStorage.setItem("foodDetails", JSON.stringify(foodDetails));
            localStorage.setItem("category", JSON.stringify(category));
        } catch (error) {
            console.error("Failed to save cart data to localStorage", error);
        }
    }, [category,cartData,foodDetails]);
 
    const value = useMemo(() => ({
        cartData,
        setCartData,
        foodDetails,
        setFoodDetails,
        category,
        setCategory,
    }), [cartData, foodDetails,category]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
