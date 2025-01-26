import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated=localStorage.getItem("user");
    console.log(isAuthenticated)
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
};

export default ProtectedRoute;
