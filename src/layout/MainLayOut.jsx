import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { CartContextProvider } from "../Context/CartContextProvider";



const MainLayOut = () => {
  return (
    <>

      <Navbar />
      <div className="mx-[14px]">
        <Outlet />
      </div>
    </>



  );
};

export default MainLayOut;