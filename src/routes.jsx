import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllProducts from "./Pages/AllProducts";
import HomePage from "./Pages/HomePage";
import MainLayOut from "./layout/MainLayOut";


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
        path: "/agent-details",
        // element: <AgentDetails />,
      },
      {
        path: "/ip-report",
        // element: <IpReport/>,
      },
    ],
  },
]);
