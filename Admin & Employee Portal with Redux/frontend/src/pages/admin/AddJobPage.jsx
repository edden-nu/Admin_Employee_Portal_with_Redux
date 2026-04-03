import AdminNavbar from "../../components/AdminNavbar";
import { useState } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";


function AddJobPage() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:5001/api/jobs/create", {
        companyName,
        jobTitle,
        description,
        salary,
      });

      alert("Job created successfully!");

      // 新增成功後跳到 /jobs（Employee 頁面 admin 也能看）
      navigate("/jobs");

    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to create job. Please try again.");
    }
  };

  return (
    <Box sx={{ padding: "24px" }}>
    <AdminNavbar />
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Add Job
      </Typography>

      <Paper sx={{ padding: "24px", maxWidth: "500px" }}>
        <TextField
          fullWidth
          label="Company Name"
          margin="normal"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <TextField
          fullWidth
          label="Job Title"
          margin="normal"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <TextField
          fullWidth
          label="Description"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          fullWidth
          label="Salary"
          margin="normal"
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        {errorMsg && (
          <Typography sx={{ color: "red", marginTop: 1 }}>
            {errorMsg}
          </Typography>
        )}

        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
}

export default AddJobPage;
