import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

function EmployeeNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2196f3" }}>
      <Toolbar>
        
        {/* Back */}
        <Button
          color="inherit"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ marginRight: 2 }}
        >
          Back
        </Button>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Employee Panel
        </Typography>

        {/* Logout */}
        <Button
          color="inherit"
          startIcon={<LogoutIcon />}
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default EmployeeNavbar;
