import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {ENV} from '../config/env.js'

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Malformed token" });
  }

  try {
    jwt.verify(token, ENV.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
