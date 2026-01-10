import { Router } from "express";
import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";

const router = Router();

router.post("/login", (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password required" });
  }

  if (password !== ENV.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { role: "admin" },
    ENV.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  res.json({ token });
});

router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});


export default router;
