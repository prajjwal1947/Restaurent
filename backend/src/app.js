const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


app.use("/api/users", require("./routes/user.routes"));
app.use("/api/restaurants", require("./routes/restaurant.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/tables", require("./routes/table.routes"));
app.use("/api/menu", require("./routes/menu.routes"));
module.exports = app;