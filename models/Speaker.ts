import mongoose from 'mongoose';

const SpeakerSchema = new mongoose.Schema({
  name: String,
  designation: String,
  company: String,
  image: String, // URL or path to the speaker's image
});

export default mongoose.models.Speaker || mongoose.model('Speaker', SpeakerSchema);
