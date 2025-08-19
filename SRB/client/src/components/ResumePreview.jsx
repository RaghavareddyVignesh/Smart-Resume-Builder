export default function ResumePreview({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh]">
      <h2 className="text-xl font-semibold mb-2">{data.fullName || "Your Name"}</h2>
      <p className="text-gray-600 mb-1">{data.email || "Email"}</p>

      <h3 className="font-semibold text-gray-800 mt-4">Education</h3>
      <p className="text-gray-700">{data.education || "Add your education here"}</p>

      <h3 className="font-semibold text-gray-800 mt-4">Experience</h3>
      <p className="text-gray-700">{data.experience || "Add your experience here"}</p>

      <h3 className="font-semibold text-gray-800 mt-4">Skills</h3>
      <p className="text-gray-700">{data.skills || "Add your skills here"}</p>

      <h3 className="font-semibold text-gray-800 mt-4">Projects</h3>
      <p className="text-gray-700">{data.projects || "Add your projects here"}</p>
    </div>
  );
}