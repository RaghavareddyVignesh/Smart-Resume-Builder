import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      saveUserToDB(); // ✅ Automatically save user on load
    }
  }, [isLoaded, isSignedIn]);

  const saveUserToDB = async () => {
    try {
      const res = await axios.post("http://localhost:5173/api/users", {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        name: user.firstName,
      });
      console.log("✅ User saved:", res.data);
      setStatus("✅ User profile saved in database.");
    } catch (err) {
      console.error("❌ Error saving user:", err);
      setStatus("❌ Failed to save user.");
    }
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Not signed in</div>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.firstName} 👋</h1>
      <p className="mb-2">Email: {user.emailAddresses[0]?.emailAddress}</p>
      <p className="mb-4 text-purple-700 font-semibold">{status}</p>

      <button
        onClick={saveUserToDB}
        className="px-5 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
      >
        Save Profile Again
      </button>
    </div>
  );
}