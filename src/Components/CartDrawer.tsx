
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartContextProvider';
import { useContext } from 'react';
import ShowCartData from './ShowCartData';

export const CartDrawer = () => {
    const { cartData, setCartData } = useContext(CartContext);
    
    const showCartData = () => {
        console.log(cartData)
    }
    const handleDoOrder = () => {
        console.log("do")
    }
    const handleIncrement = (data) => {
        console.log(data)
        try {
            setCartData((prevData) => {
                return prevData?.map((item) => {
                    if (item?.idMeal === data?.idMeal) {
                        return { ...item, count: item.count + 1 };  // Increment count by 1
                    }
                    return item;  // Return the original item if no match
                });
            });
        } catch (err) {
            console.log(err);
        }
    };


    const handledecrement = (data) => {
        try {
            setCartData((prevData) => {
                return prevData?.map((item) => {
                    if (item?.idMeal === data?.idMeal) {
                        return { ...item, count: Math?.max(item?.count - 1, 1) };
                    }
                    return item;
                });
            });

        } catch (error) {
            console.error("Error in handleDecrement:", error);

        }
    };

    const handleRemoveOrder = (data) => {

        const newItem = cartData?.filter((item) => item?.idMeal !== data?.idMeal);

        setCartData(newItem)
    }
    return (
        <Drawer>
            <DrawerAction asChild>
                <button className="relative">
                    <FaCartShopping onClick={showCartData} className="w-6 h-6  text-white" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                        {cartData && cartData.length ? cartData.length : 0}

                    </span>
                </button>
            </DrawerAction>
            <DrawerContent position="right">
                <p className='text-32l font-bold text-gray-600 border-b-2 py-2'>Shopping Cart</p>
                <div className='max-h-full overflow-y-auto mt-4 bg-slate-50 py-1 rounded-t-sm'>
                    {
                        cartData && cartData.length > 0 ? (
                            cartData.map((item) => (
                                <div key={item?.idMeal} className="overflow-y-auto">
                                    <ShowCartData
                                        price={item?.idMeal}
                                        title={item?.strMeal}
                                        img={item?.strMealThumb}
                                        handleDoOrder={handleDoOrder}
                                        quantity={item?.count}
                                        handleRemoveOrder={() => {handleRemoveOrder(item) }}
                                        handledecrement={() => {handledecrement(item) }}
                                        handleIncrement={() => {handleIncrement(item) }}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
                                <Skeleton className="space-y-2.5">
                                    <SkeletonLine className="h-4" />
                                    <SkeletonLine className="h-4" />
                                    <SkeletonLine className="h-4" />
                                    <SkeletonLine className="h-4" />
                                    <SkeletonLine className="h-10 w-1/3" />
                                </Skeleton>
                            </div>
                        )
                    }
                </div>




            </DrawerContent>
        </Drawer>
    )
}
