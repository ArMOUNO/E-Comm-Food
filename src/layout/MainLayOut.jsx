import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
;



const MainLayOut = () => {
  return (
    <div className="overflow-x-hidden">

      <Navbar />
      <div className="mx-[14px]">
        <Outlet />
      </div>
    </div>



  );
};

export default MainLayOut;