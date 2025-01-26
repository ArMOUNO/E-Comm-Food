import React, { useState } from 'react';
import { BuyingStep } from '../Components/BuyingStep';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const OrderProcess3 = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState()


    const handleNext = () => {
        if (otp?.length === 6) {
            navigate('/order-process/final-step');
        } else {

            Swal.fire({
                title: "Error",
                // text: "Please Insert the correct OTP.",
                icon: "warning",
                button: "OK",
            });
        }
    };

    return (
        <>
            <div className='flex flex-col items-center '>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center space-x-5 font-bold'>
                        <p className='lg:text-4xl md:text-3xl text-2xl relative text-red-500'>Complete your order process</p>
                        <img className='absolute top-44 w-72' src="/src/assets/Decore.png" alt="" />
                        <img className='w-44' src="/src/assets/order.png" alt="" />
                    </div>
                    <BuyingStep
                        AddressVals={true}
                        emailVals={true}
                        paymentVals={false}
                    />
                </div>
                vaaaaa

                <button onClick={handleNext} className='button-52 my-4 w-fit px-5 text-white'>Next</button>
            </div>

        </>
    );
};

export default OrderProcess3;