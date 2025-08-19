import openai from '../utils/openai.js';

export const getSuggestions = async (req, res) => {
  try {
    const { input } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You're a resume suggestion assistant." },
        { role: "user", content: input },
      ],
    });

    const suggestion = response.choices[0].message.content;
    res.json({ suggestion });
  } catch (err) {
    console.error("❌ AI Error:", err);
    res.status(500).json({ error: "AI suggestion failed." });
  }
};