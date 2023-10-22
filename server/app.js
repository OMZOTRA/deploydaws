const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { error } = require("console");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

mongoose
  .connect(
    "mongodb+srv://angulardyma:4yl7GJ3AC58uEGtt@clustertra.6j5zr5s.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("base de donné connect");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
