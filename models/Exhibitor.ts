import mongoose, { Schema, Document } from "mongoose";

interface IExhibitor extends Document {
  name: string;
  company: string;
  description: string;
  logo: string;
  website: string;
  boothNumber: string;
  category: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExhibitorSchema = new Schema<IExhibitor>({
  name: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  logo: { type: String },
  website: { type: String },
  boothNumber: { type: String },
  category: { type: String },
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const ExhibitorModel = mongoose.models.Exhibitor || mongoose.model<IExhibitor>("Exhibitor", ExhibitorSchema);

export default ExhibitorModel; 