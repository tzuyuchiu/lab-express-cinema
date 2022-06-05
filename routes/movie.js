const express = require('express');
const { request } = require('../app.js');
const router = express.Router();

const Movie = require('../models/Movie.model.js');
//Iteration 2 | List the Movies
router.get('/movies', async (req, res, next) => {
  try {
    const findListOfMovie = await Movie.find({}).select('title director');
    res.status(200).json(findListOfMovie);
  } catch (error) {
    next(error);
  }
});
//Iteration 3 | Display Movie Details
router.get('/movies/:id', async (req, res, next) => {
  try {
    movieId = req.params.id;
    const findOneMovie = await Movie.findByIdAndUpdate(movieId, req.body);
    res.json(findOneMovie);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
