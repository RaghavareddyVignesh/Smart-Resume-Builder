import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SSOCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after SSO completes
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">
      <p className="text-lg font-medium">Completing sign in, please wait...</p>
    </div>
  );
}