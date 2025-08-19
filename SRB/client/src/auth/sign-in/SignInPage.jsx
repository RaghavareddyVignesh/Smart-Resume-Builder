import { SignIn } from "@clerk/clerk-react";
import Header from "../../components/Header";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#E5F6FF] to-[#F0F4FF] text-gray-900">
      {/* ✅ Navigation Bar */}
      <Header />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md flex flex-col items-center text-center gap-6 bg-white/90 shadow-lg rounded-xl p-6">

          {/* ✅ Logo */}
          <img
            src="/logo.svg"
            alt="SmartResume Logo"
            className="h-12 w-12 object-contain"
          />

          {/* ✅ Heading */}
          <h1 className="text-3xl font-bold text-[#0F766E]">Welcome Back</h1>

          {/* ✅ Clerk Sign In Component */}
          <div className="w-full flex justify-center">
            <SignIn path="/auth/sign-in" routing="path" redirectUrl="/dashboard" />
          </div>

        </div>
      </div>
    </div>
  );
}