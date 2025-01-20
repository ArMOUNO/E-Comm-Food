import { createContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

const getSavedData = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
};

const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(() => getSavedData("cartData", []));
    const [category, setCategory] = useState(() => getSavedData("category", []));

    useEffect(() => {
        try {
            localStorage.setItem("cartData", JSON.stringify(cartData));
        } catch (error) {
            console.error("Failed to save cart data to localStorage", error);
        }
    }, [cartData]);

    useEffect(() => {
        try {
            localStorage.setItem("category", JSON.stringify(category));
        } catch (error) {
            console.error("Failed to save category to localStorage", error);
        }
    }, [category]);

    const value = useMemo(() => ({
        cartData,
        setCartData,
        category,
        setCategory,
    }), [cartData, category]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
