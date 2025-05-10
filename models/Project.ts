// models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

interface IProject extends Document {
  name: string;
  description: string;
  venue: string;
  website: string;
  year: string;
  currency: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  venue: { type: String, default: "" },
  website: { type: String, required: true },
  year: { type: String, required: true },
  currency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Check if the model exists before creating a new one
const ProjectModel = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default ProjectModel;






