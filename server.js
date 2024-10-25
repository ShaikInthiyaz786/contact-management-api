const express = require("express");
const sequelize = require("./utils/db");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./app/api/contact/route");
const fileRoutes = require("./routes/file");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/files", fileRoutes);
app.use("/api", (req, res) => res.send("working"));

app.get("/test", (req, res) => res.send("working"));

app.get("/", (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  res.send("hello word");
});

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port 3000 http://localhost:${PORT}`);
});
