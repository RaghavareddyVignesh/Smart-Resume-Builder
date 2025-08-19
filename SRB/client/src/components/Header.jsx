import { motion } from "framer-motion";
import { Button } from "../components/ui/button.jsx";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();

  return (
    <motion.header
      className="w-full fixed top-0 left-0 z-50 h-20 bg-white bg-opacity-90 shadow-md border-b border-gray-200"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* ✅ Logo + App Name */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.svg" // ✅ Make sure logo.svg or logo.png is in your public/ folder
            alt="SmartResume Logo"
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            SmartResume
          </span>
        </div>

        {/* ✅ Dynamic Button */}
        {isSignedIn ? (
          <SignOutButton signOutCallback={() => navigate("/")}>
            <Button size="md" className="ml-4 bg-gray-800 text-white hover:bg-gray-900">
              Sign Out ({user.firstName})
            </Button>
          </SignOutButton>
        ) : (
          <Button
            size="md"
            className="ml-4 bg-gray-800 text-white hover:bg-gray-900"
            onClick={() => navigate("/auth/sign-in")}
          >
            Sign In
          </Button>
        )}
      </div>
    </motion.header>
  );
}