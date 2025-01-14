import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartContextProvider } from "./Context/CartContextProvider";



createRoot(document.getElementById("root")).render(

  <CartContextProvider >
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
  </CartContextProvider >
 
);
