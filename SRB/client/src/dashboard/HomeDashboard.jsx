import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FilePlus, Edit, FolderOpen } from "lucide-react";

export default function HomeDashboard() {
  const { user } = useUser();
  const navigate = useNavigate();

  const actions = [
    {
      title: "Create Resume",
      icon: <FilePlus size={48} className="text-white" />,
      onClick: () => navigate("/create-resume"),
      gradient: "from-green-400 via-green-500 to-green-600",
    },
    {
      title: "Edit Resume",
      icon: <Edit size={48} className="text-white" />,
      onClick: () => navigate("/edit-resume"),
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    },
    {
      title: "View Saved Resumes",
      icon: <FolderOpen size={48} className="text-white" />,
      onClick: () => navigate("/saved-resumes"),
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#E5F6FF] to-[#F0F4FF] text-gray-900">
      <Header />

      <div className="flex-grow flex flex-col justify-center items-center text-center mt-24 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user?.firstName} 👋</h1>
        <p className="mb-12 text-gray-600 text-lg md:text-xl">
          What would you like to do today?
        </p>

        <div className="flex gap-6 md:gap-10 w-full max-w-6xl overflow-x-auto justify-center px-2">
          {actions.map((action, index) => (
            <div
              key={index}
              onClick={action.onClick}
              className={`cursor-pointer min-w-[220px] md:min-w-[250px] h-[350px] rounded-xl 
                bg-gradient-to-b ${action.gradient} shadow-lg 
                flex flex-col justify-between transition transform duration-300 ease-in-out 
                hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex-grow flex flex-col justify-center items-center p-6">
                {action.icon}
              </div>

              <div className="bg-white text-gray-900 text-base md:text-lg font-semibold py-3 px-4">
                {action.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}