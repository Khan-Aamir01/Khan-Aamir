import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    title : string,
    description : string,
    techStack : string[],
    githubUrl : string,
    liveUrl : string,
    createdAt : Date,
}

const ProjectSchema : Schema<IProject> = new Schema (
    {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
    
);
export const Project = mongoose.model<IProject>("Project", ProjectSchema);