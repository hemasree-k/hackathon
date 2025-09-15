import React from "react";

function HomePage() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>SkillChain – Micro Skill Exchange & Learning Network</h1>
      <p>
        A platform where people can teach and learn real-life skills from each other, without using money.
      </p>
      <button style={{ padding: "10px 20px", backgroundColor: "#1976d2", color: "white", border: "none", borderRadius: "5px" }}>
        Join the exchange
      </button>

      <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-around" }}>
        <div>
          <h3>Teach</h3>
          <p>Share skills you know well</p>
        </div>
        <div>
          <h3>Earn</h3>
          <p>Earn Skill Tokens in exchange</p>
        </div>
        <div>
          <h3>Learn</h3>
          <p>Use tokens to learn new skills</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
