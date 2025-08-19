import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  name: String,
  template: String,
  fullName: String,
  email: String,
  education: String,
  experience: String,
  skills: String,
  projects: String,
}, { timestamps: true });

const Resume = mongoose.model('Resume', ResumeSchema);

export default Resume;