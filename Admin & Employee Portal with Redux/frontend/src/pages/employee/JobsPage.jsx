import EmployeeNavbar from "../../components/EmployeeNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box
} from "@mui/material";

function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Box sx={{ padding: "24px" }}>
        <EmployeeNavbar />
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Job Listings
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><strong>Company</strong></TableCell>
              <TableCell><strong>Job Title</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Salary</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.companyName}</TableCell>
                <TableCell>{job.jobTitle}</TableCell>
                <TableCell>{job.description}</TableCell>
                <TableCell>{job.salary}</TableCell>
              </TableRow>
            ))}

            {jobs.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No jobs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
}

export default JobsPage;
