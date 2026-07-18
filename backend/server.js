const express = require("express");
const cors = require("cors");
require("dotenv").config();

const tripRoutes = require("./routes/tripRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/trip", tripRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});