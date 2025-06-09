// components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import RedirectionBackdrop from "../components/shared/RedirectionBackDrop";

const ProtectedRoute = ({ children, user, redirect = "/login", showLoader = true }) => {
  if (!user) {
    return showLoader ? (
      <RedirectionBackdrop to={redirect} />
    ) : (
      <Navigate to={redirect} replace />
    );
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
