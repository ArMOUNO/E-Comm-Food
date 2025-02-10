import React from "react";

const CuponOffer = () => {
  return (
    <div className="flex  justify-between  mx-5 my-10 shadow-xl  my-14 rounded-md overflow-hidden">
      <div className="grid lg:grid-cols-12 shadow-lg p-2  grid-cols-2 gap-3 rounded-md mx-auto">
  
        <div className=" lg:col-span-3  lg:row-span-2 overflow-hidden">
          <img
            className="h-full w-full object-cover overflow-hidden shadow-xl rounded-md"
            src="/src/assets/cuponHero.png"
            alt=""
          />
        </div>

        {/* Second Image */}
        <div className="lg:col-span-9 col-span-8 lg:h-[300px] rounded-lg overflow-hidden">
          <img
            className="h-full object-cover w-full "
            src="/src/assets/30.png"
            alt=""
          />
        </div>

        {/* Third Image */}
        <div className="col-span-9 h-[300px] w-full rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/src/assets/sushi.png"
            alt=""
          />
        </div>
        {/* <img className=" col-span-3 row-span col-start-10 rounded-2xl " src="/src/assets/cupon.png" alt="" /> */}
      </div>
    
    </div>
  );
};

export default CuponOffer;
