

const CategoryFrame = ({img,title,details}) => {
   
    return (
        <div  className='flex puff-in-center flex-col shadow-md cursor-pointer hover:scale-105 transition-transform duration-100 justify-center items-center border-2 md:w-[140px] w-[130px] rounded-md h-[140px] hover:border-green-700 p-2'>
            <img className="w-[100px] hover:scale-125 transition-transform duration-300 " src={img} alt="" />
            <p className="mt-3 md:text-xl text-lg text-green-500 font-bold">{title}</p>
            <p className="mt-2 text-gray-600 text-sm">{details}</p>
        </div>
    );
};

export default CategoryFrame;