import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Dashboard</h2>
      <p><strong>Tokens:</strong> 12</p>

      <h3>My Skills</h3>
      <ul>
        <li>Video Editing – 2 tokens earned</li>
        <li>French – 0 tokens earned</li>
      </ul>

      <h3>Progress</h3>
      <p>3 skills learned</p>
    </div>
  );
}

export default Dashboard;
