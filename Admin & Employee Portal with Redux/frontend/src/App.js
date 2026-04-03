import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminRoute from "./components/AdminRoute";
import EmployeeRoute from "./components/EmployeeRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import EmployeesPage from "./pages/admin/EmployeesPage";
import AddJobPage from "./pages/admin/AddJobPage";
import JobsPage from "./pages/employee/JobsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* 🔒 Admin 專區（這一段全部被 AdminRoute 保護） */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/employees" element={<EmployeesPage />} />
          <Route path="/add-job" element={<AddJobPage />} />
        </Route>

        {/* 🔒 Employee 專區（這一段全部被 EmployeeRoute 保護） */}
        <Route element={<EmployeeRoute />}>
          <Route path="/jobs" element={<JobsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
