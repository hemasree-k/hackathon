import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <HomePage />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
