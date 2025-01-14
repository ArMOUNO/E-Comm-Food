
import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartContextProvider';
import { useContext } from 'react';
import ShowCartData from './ShowCartData';

export const CartDrawer = () => {
    const { cartData } = useContext(CartContext);
    console.log(cartData)
    const showCartData = () => {
        console.log(cartData)
    }
    return (
        <Drawer>
            <DrawerAction asChild>
                <button className="relative">
                    <FaCartShopping onClick={showCartData} className="w-6 h-6 text-white" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                        {cartData && cartData.length ? cartData.length : 0}

                    </span>
                </button>
            </DrawerAction>
            <DrawerContent position="right">
                {
                    cartData && cartData.length>0?
                    <div className='overflow-y-auto'>
                    

<ShowCartData/>

                    
                    </div>:
                                    <div className="mx-auto max-w-md space-y-3 px-6 py-8 lg:px-0">
                                    <Skeleton className="space-y-2.5">
                                        <SkeletonLine className="h-4" />
                                        <SkeletonLine className="h-4" />
                                        <SkeletonLine className="h-4" />
                                        <SkeletonLine className="h-4" />
                                        <SkeletonLine className="h-10 w-1/3" />
                                    </Skeleton>
                                </div>
                }

            </DrawerContent>
        </Drawer>
    )
}
