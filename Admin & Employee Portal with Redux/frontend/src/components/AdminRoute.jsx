import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // 沒登入 → 回 Login
  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  // 不是 admin → 不給進，丟去 /jobs
  if (user.type !== "admin") {
    return <Navigate to="/jobs" replace />;
  }

  // ✅ admin 才能看到這裡包住的所有 routes
  return <Outlet />;
}

export default AdminRoute;
