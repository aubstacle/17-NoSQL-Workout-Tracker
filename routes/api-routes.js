const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find().then((workout) => {
    res.json(workout);
  });
});

module.exports = router;
