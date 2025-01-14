import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState(() => {
        const savedCartData = localStorage.getItem("cartData");
        return savedCartData ? JSON.parse(savedCartData) : [];
    });
    const value = {
        cartData,
        setCartData,
    };
    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartData));
    }, [cartData]);



    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };


// import { createContext, useState } from "react";

// const CartContext = createContext();

// const CartContextProvider = ({ children }) => {
//     const [cartData, setCartData] = useState([]);

//     const value = {
//         cartData,
//         setCartData,
//     }

//     return (
//         <CartContext.Provider value={value}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export { CartContext, CartContextProvider };

