const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

//REQUIRE CONTROLLERS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

//GET ROUTE

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

//USE CONTROLLERS

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
