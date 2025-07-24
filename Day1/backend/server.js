const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const PORT = 3001;

app.use(express.json()); 

// Home test route
app.get("/", (req, res) => {
  res.send("✅ Server is up! Use POST /api/users");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
