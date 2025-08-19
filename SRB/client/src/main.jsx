import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import LandingPage from "./home/LandingPage.jsx";
import SignInPage from "./auth/sign-in/SignInPage.jsx";
import SSOCallback from "./auth/SSOCallback.jsx";
import HomeDashboard from "./dashboard/HomeDashboard.jsx";
import CreateResume from "./pages/CreateResume.jsx";
import ResumeForm from "./pages/ResumeForm.jsx";  // ✅ New route

const clerkFrontendApi = "pk_test_a2Vlbi1vY2Vsb3QtMTUuY2xlcmsuYWNjb3VudHMuZGV2JA";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/auth/sign-in", element: <SignInPage /> },
  { path: "/auth/sso-callback", element: <SSOCallback /> },
  { path: "/dashboard", element: <HomeDashboard /> },
  { path: "/create-resume", element: <CreateResume /> },   // ✅ Added Create Resume page
  { path: "/resume-form", element: <ResumeForm /> },       // ✅ Added Resume Form page
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);