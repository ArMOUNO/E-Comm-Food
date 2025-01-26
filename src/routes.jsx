import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllProducts from "./Pages/AllProducts";
import HomePage from "./Pages/HomePage";
import MainLayOut from "./layout/MainLayOut";
import AboutPage from "./Pages/AboutPage";
import FoodByCategory from "./Pages/FoodByCategory";
import { Login } from "./Components/Login";
import OrderProcess from "./Pages/OrderProcess";
import OrderProcess2 from "./Pages/OrderProcess2";
import OrderProcess3 from "./Pages/OrderProcess3";
import BlankRout from "./Components/BlankRout";
import Contact from "./Pages/Contact";
import ProtectedRoute from "./Context/ProtectedRoute";


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOut />,
//     children: [
//       {
//         path: "*",
//         element: <BlankRout/>,
//       },
//       {
//         path: "/login",
//         element: <Login/>,
//       },
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/all-products",
//         element: <AllProducts />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/food-by-category/:id",
//         element: <FoodByCategory/>,
//       },
//       {
//         path: "/order-process",
//         element: <OrderProcess/>,
//       },
//       {
//         path: "/order-process/second-step",
//         element: <OrderProcess2/>,
//       },
//       {
//         path: "/order-process/final-step",
//         element: <OrderProcess3/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact/>,
//       },
  
//     ],
//   },
// ]);



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "*",
        element: <BlankRout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
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
        element: <FoodByCategory />,
      },
      {
        path: "/order-process",
        element: <ProtectedRoute />,
        children: [
          { path: "", element: <OrderProcess /> },
          { path: "second-step", element: <OrderProcess2 /> },
          { path: "final-step", element: <OrderProcess3 /> },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
