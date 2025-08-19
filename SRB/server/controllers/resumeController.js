import Resume from '../models/Resume.js';
export const createResume = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);  // 👈 Add this for debugging
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    console.error("❌ Error saving resume:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};