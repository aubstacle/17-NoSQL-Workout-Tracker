const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find().then((workout) => {
    res.json(workout);
  });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((createdWorkout) => {
        res.json(createdWorkout)
    }).catch((err) => console.log(err))
})

module.exports = router;
