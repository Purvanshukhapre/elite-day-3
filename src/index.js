const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const profileRouter = require("./routes/profile");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/', profileRouter);

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", require("./routes/authRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/locations", require("./routes/locationRoutes"));
app.use("/ratings", require("./routes/ratingRoutes"));
app.use("/reports", require("./routes/reportRoutes"));
app.use("/policy", require("./routes/policyRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));