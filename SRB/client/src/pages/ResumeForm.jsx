import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import axios from "axios";
import ResumePreview from "../components/ResumePreview";
import { motion } from "framer-motion";

export default function ResumeForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name") || "Untitled Resume";
  const template = queryParams.get("template") || "Blank";

  const [resumeData, setResumeData] = useState({
    name,
    template,
    fullName: "",
    email: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
  });

  const [aiSuggestions, setAiSuggestions] = useState({});
  const [loadingField, setLoadingField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetSuggestion = async (field) => {
    setLoadingField(field);
    try {
      const response = await axios.post("/api/ai/suggest", {
        field,
        input: resumeData[field],
      });
      setAiSuggestions((prev) => ({
        ...prev,
        [field]: response.data.suggestion,
      }));
    } catch (err) {
      console.error("❌ Failed to fetch AI suggestion:", err);
      alert("❌ Failed to fetch AI suggestion");
    } finally {
      setLoadingField(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/resumes", resumeData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("✅ Resume saved successfully!");
    } catch (error) {
      console.error("❌ Failed to save resume:", error);
      alert("❌ Failed to save resume.");
    }
  };

  const renderField = (fieldName, placeholder, rows = 2, required = false) => (
    <div className="space-y-1">
      {rows === 1 ? (
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-[#0F766E] outline-none"
          placeholder={placeholder}
          name={fieldName}
          value={resumeData[fieldName]}
          onChange={handleChange}
          required={required}
        />
      ) : (
        <textarea
          className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-[#0F766E] outline-none"
          placeholder={placeholder}
          name={fieldName}
          value={resumeData[fieldName]}
          onChange={handleChange}
          rows={rows}
        />
      )}
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
        <Button
          type="button"
          size="sm"
          onClick={() => handleGetSuggestion(fieldName)}
          disabled={loadingField === fieldName}
        >
          {loadingField === fieldName ? "Loading..." : "💡 Suggest"}
        </Button>
        {aiSuggestions[fieldName] && (
          <p className="italic text-gray-600">💬 {aiSuggestions[fieldName]}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#E5F6FF] to-[#F0F4FF] text-gray-900">
      <Header />

      {/* Main Grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6 p-4 md:p-8">
        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-4 sticky top-20 h-fit"
        >
          <h1 className="text-2xl font-bold text-gray-800">{resumeData?.name}</h1>
          <p className="text-gray-500 mb-2 italic">{template} Template</p>

          {renderField("fullName", "Full Name", 1, true)}
          {renderField("email", "Email", 1, true)}
          {renderField("education", "Education")}
          {renderField("experience", "Experience")}
          {renderField("skills", "Skills (comma-separated)")}
          {renderField("projects", "Projects")}

          <Button
            type="submit"
            className="w-full bg-[#0F766E] text-white hover:bg-[#0D5C57] transition duration-300"
          >
            Save Resume
          </Button>
        </motion.form>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-6 overflow-auto"
        >
          <ResumePreview data={resumeData} />
        </motion.div>
      </div>
    </div>
  );
}