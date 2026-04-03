import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    try {
      setErrorMsg("");

      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      const user = res.data.user;
      dispatch(loginSuccess(user));

      // 之後我們會實作 /admin 和 /jobs route
      if (user.type === "admin") {
        navigate("/admin");
      } else {
        navigate("/jobs");
      }
    } catch (error) {
      console.error(error);
      if (error.response?.data?.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg("Login failed.");
      }
    }
  };

  return (
    <div style={{ padding: "24px", maxWidth: "320px", margin: "40px auto" }}>
      <h2>Login</h2>

      <div style={{ marginBottom: "8px" }}>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "8px" }}>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errorMsg && (
        <div style={{ color: "red", marginBottom: "8px" }}>{errorMsg}</div>
      )}

      <button onClick={handleLogin} style={{ padding: "8px 16px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
