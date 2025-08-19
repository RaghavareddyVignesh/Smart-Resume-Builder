import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth, SignOutButton } from "@clerk/clerk-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";

export default function LandingPage() {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-[#D1F8EF] text-[#1F2937]">
      {/* ✅ Navigation Bar */}
      <Header />

      {/* ✅ Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <motion.div
          className="w-full max-w-3xl text-center px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to{" "}
            <span className="text-[#0F766E]">Smart Resume Builder</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-700 tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Create stunning resumes effortlessly with AI suggestions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            {isSignedIn ? (
              <SignOutButton signOutCallback={() => navigate("/")}>
                <Button size="lg" variant="destructive">
                  Sign Out ({user.firstName})
                </Button>
              </SignOutButton>
            ) : (
              <Button size="lg" onClick={() => navigate("/auth/sign-in")}>
                Sign In
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}