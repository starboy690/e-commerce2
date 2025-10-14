const port = process.env.PORT || 6090;
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { register } = require("./controllers/auth.controller");
const { login } = require("./controllers/auth.controller");
const morgan = require("morgan");

const app = express();

//Middleware settings
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("okay its working");
});

// All Routes
app.post("/register", register);

app.post("/login", login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
