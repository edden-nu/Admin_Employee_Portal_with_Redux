import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function EmployeeRoute() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  if (user.type !== "employee") {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}

export default EmployeeRoute;
