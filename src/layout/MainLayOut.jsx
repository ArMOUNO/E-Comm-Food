import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
;



const MainLayOut = () => {
  return (
    <div className="overflow-x-hidden">

      <Navbar />
      <div className="mx-[14px]">
        <Outlet />
      </div>
      <Footer/>
    </div>



  );
};

export default MainLayOut;