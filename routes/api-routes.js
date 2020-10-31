const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find().then((workout) => {
    res.json(workout);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(10)
    .then((workoutRange) => {
      res.json(workoutRange);
    })
    .catch((err) => console.log(err));
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then((createdWorkout) => {
        res.json(createdWorkout)
    }).catch((err) => console.log(err))
})

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  })
    .then((createdWorkout) => {
      res.json(createdWorkout);
    })
    .catch((err) => console.log(err))
});

module.exports = router;
