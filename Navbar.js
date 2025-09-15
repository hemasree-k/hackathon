import React from "react";

function Navbar({ setPage }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px 30px", borderBottom: "1px solid #eee" }}>
      <h2 style={{ color: "#0d47a1" }}>SkillChain</h2>
      <div>
        <button onClick={() => setPage("home")} style={{ marginRight: "10px" }}>Home</button>
        <button onClick={() => setPage("dashboard")} style={{ marginRight: "10px" }}>Dashboard</button>
      </div>
    </nav>
  );
}

export default Navbar;
