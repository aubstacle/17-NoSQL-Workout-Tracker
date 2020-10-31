const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes")

app.use(logger("dev"));

//REQUIRE CONTROLLERS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

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

// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });

app.use(apiRoutes);
app.use(htmlRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
