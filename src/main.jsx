import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CartContextProvider } from "./Context/CartContextProvider";
import { ToastWrapper } from "keep-react";



createRoot(document.getElementById("root")).render(

  <CartContextProvider >
  <StrictMode>
      <RouterProvider router={router} />
      <ToastWrapper
        richColors={true}
        toastOptions={{
        classNames: {
          title: 'text-body-3 font-medium',
          toast: 'rounded-xl shadow-large',
          description: 'text-body-4 font-normal',
        },
      }}
    />
  </StrictMode>
  </CartContextProvider >
 
);
