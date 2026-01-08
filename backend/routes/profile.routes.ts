import { Router } from "express";
import { Profile } from "../models/Profile.js";
import { adminAuth } from "../middleware/auth.js";

const router = Router();

/**
 * CREATE profile (only once)
 */
router.post("/",adminAuth, async (req, res) => {
  try {
    const exists = await Profile.findOne();
    if (exists) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/**
 * READ profile (public)
 */
router.get("/", async (_req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/**
 * UPDATE profile
 */
router.put("/",adminAuth, async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
        upsert: true, // create if not exists
      }
    );

    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/**
 * DELETE profile (optional)
 */
router.delete("/",adminAuth, async (_req, res) => {
  try {
    await Profile.deleteMany({});
    res.json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
