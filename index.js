const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const bodyParser = require("body-parser");
const path = require('path');
// const MONGOURL = process.env.MONGOURL;
// const PORT = process.env.PORT;

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo Server");
});

mongoose.connection.on("error", (err) => {
  console.log("Error Connecting To Database");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./", "build")));



app.use("/api", router);

app.get("/ping", async (req, res, next) => {
  try {
    return res
      .status(200)
      .json({ msg: "Success", status: 200, data: "server running" });
  } catch (e) {
    next(e);
  }
});
app.get("*", function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "./", "build/index.html"));
});

app.listen(process.env.PORT, function () {
  console.log("server started in", process.env.PORT);
});

//import databaseurl and port from .env file and connect to mongoose and create a ping route to run the server
