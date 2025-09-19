const express = require("express");
const connectionDatabase = require("./config/dbConfig");
const todoRoutes = require("./routes/todoRoute");

const app = express();

// Connection with database
connectionDatabase();

// Middlewares
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
