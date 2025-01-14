const ShowProducts = ({ image, name, price, onBuy }) => {
  return (
    <div className=" p-2 rounded-lg md:w-[170px] w-[130px] bg-slate-50 flex flex-col items-center shadow-lg  hover:shadow-2xl transition-all duration-300 ease-in-out">
      <img
        src={image}
        alt={name}
        className="w-[130px] md:h-[150px] h[120px] object-cover rounded-md mb-3 hover:scale-105 transition-transform duration-200"
      />
      <h3 className="md:text-lg text-sm font-semibold text-gray-800  text-center">{name?.length > 20 ? `${name.slice(0, 20)}...` : name}</h3>
      <p className="text-sm font-semibold text-green-600 mb-2">Price: ${price}</p>
      <button
        onClick={onBuy}
        className="py-1 md:px-6 px-2 bg-gradient-to-r from-green-500 to-yellow-400 text-white rounded-full md:text-lg text-sm font-medium transition-transform transform hover:scale-105 hover:translate-x-1"
      >
        Order Now
      </button>
    </div>
  );
};

export default ShowProducts;
