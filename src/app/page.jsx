"use client";
import { useState } from "react";
import { Login } from "./components/login/Login";
import { Load } from "./components/load/Load";
import { Dashboard } from "./components/dashbord/Dashbord";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Function that will be triggered after loading completes
  const handleLoadComplete = () => {
    setLoading(false); // This will hide the loader and show the dashboard
  };

  return (
    <div>
      <Login />
      {loading ? <Load onLoadComplete={handleLoadComplete} /> : <Dashboard />}
    </div>
  );
}
