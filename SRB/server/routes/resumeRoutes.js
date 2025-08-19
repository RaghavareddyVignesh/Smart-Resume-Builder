import express from 'express';
import Resume from '../models/resumeModel.js';

const router = express.Router();

// POST route to save resume
router.post('/', async (req, res) => {
  try {
    console.log("➡️ POST /api/resumes called");
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json({ message: '✅ Resume saved successfully' });
  } catch (err) {
    console.error("❌ Failed to save resume:", err);
    res.status(500).json({ message: '❌ Failed to save resume' });
  }
});

export default router;