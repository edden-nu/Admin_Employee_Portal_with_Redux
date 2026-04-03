import AdminNavbar from "../../components/AdminNavbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AdminNavbar />
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#673ab7" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>

          <Button color="inherit" onClick={() => navigate("/admin/employees")}>
            Employees
          </Button>

          <Button color="inherit" onClick={() => navigate("/add-job")}>
            Add Job
          </Button>

          {/* <Button color="inherit" onClick={() => navigate("/jobs")}>
            View Jobs
          </Button> */}
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Box sx={{ padding: "24px" }}>
        <Typography variant="h5" sx={{ marginBottom: "12px" }}>
          Welcome, Admin!
        </Typography>
        <Typography variant="body1">
          使用上方的導覽列管理員工、建立職缺或查看所有工作。
        </Typography>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
