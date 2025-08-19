import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import SignInPage from "./auth/sign-in/SignInPage";
import ResumeForm from "./pages/ResumeForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </Router>
  );
}