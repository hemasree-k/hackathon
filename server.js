const express = require("express");
const app = express();
app.use(express.json());

// Mock DB
let users = [{ id: 1, name: "Alice", tokens: 10 }];

// Routes
app.get("/", (req, res) => {
  res.send("SkillChain API running...");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/earn-token", (req, res) => {
  users[0].tokens += 2;  // mock token reward
  res.json({ message: "Tokens earned", tokens: users[0].tokens });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));