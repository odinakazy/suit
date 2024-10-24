import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isLoggedIn = false;

  return !isLoggedIn ? <Outlet /> : <Navigate to={"/dashboard"} />;
};

export default PublicRoutes;
