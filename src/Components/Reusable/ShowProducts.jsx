const ShowProducts = ({ image, name, price, onBuy }) => {
  return (
    <div className=" p-2 rounded-lg w-[240px] flex flex-col items-center shadow-lg  hover:shadow-2xl transition-all duration-300 ease-in-out">
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[150px] object-cover rounded-md mb-3 hover:scale-105 transition-transform duration-200"
      />
      <h3 className="text-lg font-semibold text-gray-800  text-center">{name?.length > 20 ? `${name.slice(0, 20)}...` : name}</h3>
      <p className="text-sm font-semibold text-green-600 mb-2">Price: ${price}</p>
      <button
        onClick={onBuy}
        className="py-1 px-6 bg-gradient-to-r from-green-500 to-yellow-400 text-white rounded-full text-lg font-medium transition-transform transform hover:scale-105 hover:translate-x-1"
      >
        Order Now
      </button>
    </div>
  );
};

export default ShowProducts;
