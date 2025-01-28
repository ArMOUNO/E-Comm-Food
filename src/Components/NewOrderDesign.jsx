const NewOrderDesign = ({ onBuy, item, details, img, price,itemViewClick }) => {
    return (
        <>
            <div className="relative bg-gradient-to-b from-[#ffffff] via-[#ffffffbf] to-[#fbada380] h-[200px] md:w-[170px] w-[120px] flex flex-col items-center justify-center rounded-lg my-4">
                <div className="absolute md:top-[-60px] top-[-30px] bg-gradient-to-t from-[#ffffff] via-[#ffffffbf] to-[#ea7f7f80] md:w-[150px] md:h-[150px] w-[130px] h-[130px] rounded-full flex justify-center items-center">
                    <div className="bg-white flex items-center justify-center md:w-[130px] md:h-[130px] w-[110px] h-[110px] rounded-full">
                        <img onClick={itemViewClick} className="md:w-[120px] md:h-[120px] w-[100px] h-[100px] rounded-full p-2 hover:scale-105 transition-transform duration-200 cursor-pointer" src={img} alt="" />
                    </div>
                </div>
                <div className="mt-[70px] font-bold text-red-500">
                    <div className="space-y-1 text-center">
                        <p className="text-xs md:text-lg">{item}</p>
                        <p className="text-xs md:text-xs">{details}</p>
                    </div>
                    <p className="text-sm">Price ${price}</p>
                </div>
                <div className="flex justify-center">
                    <button onClick={onBuy} className="bg-red-500 hover:scale-105 rounded-md absolute top-[184px] text-white p-1 px-3 text-xs  md:text-sm">Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default NewOrderDesign;
