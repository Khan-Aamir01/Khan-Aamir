import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  logoName: string;
  fullName: string;
  role: string;
  imageUrl: string;
  about: string;
  email: string;
  phone?: string;
  location: string;
  footerText : string;

  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };

  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const ProfileSchema = new Schema<IProfile>({
  logoName: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, required: true },
  imageUrl: { type: String, required: true },
  about: { type: String, required: true },
  footerText : {type : String,required : true},

  email: { type: String, required: true },
  phone: String,
  location: String,

  skills: {
    frontend: { type: [String], default: [] },
    backend: { type: [String], default: [] },
    database: { type: [String], default: [] },
    tools: { type: [String], default: [] },
  },

  social: {
    github: String,
    linkedin: String,
    twitter: String,
  },
});

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);
