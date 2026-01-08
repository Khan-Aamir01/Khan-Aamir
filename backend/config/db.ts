import mongoose from "mongoose";
import {ENV} from './env.js'

const MONGO_URI = ENV.MONGO_URI;
console.log(MONGO_URI);

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};
