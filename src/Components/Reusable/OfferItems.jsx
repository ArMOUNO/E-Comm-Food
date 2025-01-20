


const OfferItems = ({ oldPrice, NewPrice, title, img ,handleCart}) => {

    return (
        <div>
            <div className='relative bg-white lg:pb-3 shadow-2xl my-4 w-[130px] h-[200px] md:w-[170px] md:h-[230px] lg:w-[240px] lg:h-[300px] flex flex-col justify-end items-center rounded-lg md:rounded-2xl  lg:rounded-3xl'>
                <img className='lg:w-[70%] w-[90%] rounded-lg overflow-hidden mt-4' src={img} alt="" />
                <p
                    className='text-sm md:text-lg text-center font-bold text-gray-700 truncate'
                    style={{ maxWidth: '15ch' }}
                >
                    {title}
                </p>

                <div className="flex flex-col justify-center items-center ">
                    <p className='md:text-sm text-xs font-bold text-red-500 line-through '>${oldPrice}</p>
                    <p className='md:text-sm text-xs font-bold text-gray-700  '><span className="text-green-700">Offer Price:</span> ${NewPrice}</p>
                </div>
                <img onClick={handleCart} className='md:w-12 w-9 hover:scale-105 cursor-pointer absolute top-0 right-0' src="/src/assets/OfferCartRed.png" alt="" />
            </div>
        </div>
    );
};

export default OfferItems;