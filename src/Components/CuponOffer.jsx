import React from "react";

const CuponOffer = () => {
  return (
    <div className="flex justify-between lg:ml-[500px] my-14 rounded-md overflow-hidden">
      <div className="grid lg:grid-cols-6  grid-cols-2 gap-3 rounded-md mx-auto">
        {/* First Image (Reference Height) */}
        <div className=" col-span-1 lg:row-span-2 overflow-hidden">
          <img
            className="h-full w-full object-cover overflow-hidden shadow-xl rounded-md"
            src="/src/assets/cuponHero.png"
            alt=""
          />
        </div>

        {/* Second Image */}
        <div className="lg:col-span-3 lg:h-[300px] rounded-lg overflow-hidden">
          <img
            className="h-full object-cover w-full "
            src="/src/assets/30.png"
            alt=""
          />
        </div>

        {/* Third Image */}
        <div className="col-span-3 h-[300px] w-full rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="/src/assets/sushi.png"
            alt=""
          />
        </div>
      </div>
     
    </div>
  );
};

export default CuponOffer;
