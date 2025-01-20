import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllProducts from "./Pages/AllProducts";
import HomePage from "./Pages/HomePage";
import MainLayOut from "./layout/MainLayOut";
import AboutPage from "./Pages/AboutPage";
import FoodByCategory from "./Pages/FoodByCategory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/food-by-category/:id",
        element: <FoodByCategory/>,
      },
    ],
  },
]);
