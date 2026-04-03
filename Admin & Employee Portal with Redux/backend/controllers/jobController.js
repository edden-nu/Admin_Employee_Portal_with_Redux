import Job from "../models/Job.js";

// Create Job (Admin)
export const createJob = async (req, res) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    if (!companyName || !jobTitle || !description || !salary) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const job = await Job.create({
      companyName,
      jobTitle,
      description,
      salary,
    });

    res.status(201).json({ message: "Job created successfully!", job });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // 最新的在最上面
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};
