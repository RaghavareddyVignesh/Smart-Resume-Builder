import express from 'express';
import User from '../models/user.js'; // ✅ This is the correct import

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;

    let user = await User.findOne({ clerkId });
    if (!user) {
      user = new User({ clerkId, email, name });
      await user.save();
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;