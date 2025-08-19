import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function CreateResume() {
  const [resumeName, setResumeName] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const navigate = useNavigate();

  const templates = [
    { name: "Blank", description: "Start with a clean slate", color: "from-green-300 to-green-500" },
    { name: "Modern", description: "Sleek and stylish layout", color: "from-blue-300 to-blue-500" },
    { name: "Professional", description: "A polished professional look", color: "from-purple-300 to-purple-500" },
  ];

  const handleConfirmName = () => {
    if (!resumeName.trim()) {
      alert("Please enter a name for your resume.");
      return;
    }
    setShowTemplates(true);
  };

  const handleSelectTemplate = (template) => {
    navigate(`/resume-form?name=${encodeURIComponent(resumeName)}&template=${encodeURIComponent(template)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#E5F6FF] to-[#F0F4FF] text-gray-900">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 mt-12">
        {!showTemplates ? (
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Name Your <span className="text-[#0F766E]">Resume</span>
            </h1>
            <input
              type="text"
              placeholder="Enter resume name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0F766E] focus:outline-none w-72"
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
            />
            <button
              onClick={handleConfirmName}
              className="px-6 py-2 rounded-lg bg-[#0F766E] text-white text-lg font-semibold shadow-md hover:bg-[#0c5e57] transition"
            >
              Confirm
            </button>
          </motion.div>
        ) : (
          <>
            <motion.h1
              className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Choose a <span className="text-[#0F766E]">Template</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {templates.map((template, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => handleSelectTemplate(template.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`cursor-pointer rounded-xl shadow-xl bg-gradient-to-br ${template.color} p-6 text-white flex flex-col justify-between h-52 transition`}
                >
                  <h2 className="text-2xl font-bold mb-2">{template.name}</h2>
                  <p className="text-md opacity-90">{template.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}