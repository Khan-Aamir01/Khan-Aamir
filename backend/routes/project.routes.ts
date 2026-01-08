import { Router } from "express";
import { Project } from "../models/Project.js";
import { adminAuth } from "../middleware/auth.js";

const router = Router();

// CREATE project
router.post("/",adminAuth, async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id", adminAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json({
      message: "Project deleted successfully",
      id,
    });
  } catch (err) {
    return res.status(400).json({
      message: "Invalid project ID",
    });
  }
});



router.put("/:id",adminAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Update fields (only if provided)
    project.title = req.body.title ?? project.title;
    project.description = req.body.description ?? project.description;
    project.techStack = req.body.techStack ?? project.techStack;
    project.githubUrl = req.body.githubUrl ?? project.githubUrl;
    project.liveUrl = req.body.liveUrl ?? project.liveUrl;

    const updatedProject = await project.save();

    res.status(200).json(updatedProject);
  } catch (err) {
    console.error("Update project error:", err);
    res.status(500).json({ message: "Failed to update project" });
  }
});


// GET all projects
router.get("/", async (_req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

export default router;
