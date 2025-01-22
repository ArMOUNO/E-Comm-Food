import React from 'react';

const BlankRout = () => {
    return (
        <div className='flex justify-center my-5 items-center flex-col'>
            <img className='md:w-[50%] w-full' src="/src/assets/somethingWrong.png" alt="" />
            <p className='text-red-500 text-3xl md:text-4xl'>Oops Something Wrong!</p>
        </div>
    );
};

export default BlankRout;