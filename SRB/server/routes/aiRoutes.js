// server/routes/aiRoutes.js

import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Must be set correctly in .env
});

router.post('/suggest', async (req, res) => {
  try {
    const { field, input } = req.body;

    if (!field || !input) {
      return res.status(400).json({ error: 'Missing field or input' });
    }

    const prompt = `
    I am writing a professional resume. Can you give improvements and suggestions for the "${field}" section?
    
    Current content:
    ${input}
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
    });

    const suggestion = completion.choices[0]?.message?.content?.trim() || '';

    res.json({ suggestion });
  } catch (error) {
    console.error('❌ AI suggestion error:', error);
    res.status(500).json({ error: 'AI suggestion failed' });
  }
});

export default router;