import ResumeForm from "./ResumeForm";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const resumeName = searchParams.get("name") || "";
    const template = searchParams.get("template") || "blank";

    setResumeData((prev) => ({
      ...prev,
      name: resumeName,
      template: template,
    }));
  }, [searchParams]);

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-[#E5F6FF] to-[#F0F4FF]">
      {/* Left - Form */}
      <div className="w-1/2 p-6 overflow-y-auto bg-white shadow-lg">
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>

      {/* Right - Preview */}
      <div className="w-1/2 p-6 bg-gray-50 border-l shadow-inner overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold">{resumeData.name || "Your Name"}</h1>
          <p className="text-gray-500">{resumeData.email || "your.email@example.com"}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Education</h3>
            <p>{resumeData.education || "Add your education..."}</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Experience</h3>
            <p>{resumeData.experience || "Add your experience..."}</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Skills</h3>
            <p>{resumeData.skills || "Add your skills..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}