import express from "express";
import type { Request, Response } from "express";
import {connectDb} from './config/db.js';
import projectRoutes from './routes/project.routes.js'
import profileRoutes from './routes/profile.routes.js'
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
import {ENV} from './config/env.js'

const app = express()
app.use(cors())
app.use(express.json())
connectDb();
app.use('/api/projects',projectRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/auth',authRoutes);

app.get('/',(req:Request,res:Response)=>{
    res.json({message:"Server Started"});
})

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(ENV.PORT,()=>{
    console.log("server Started")
})