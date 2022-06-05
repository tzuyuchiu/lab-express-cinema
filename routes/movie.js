const express = require('express');
const router = express.Router();

const Movie = require('../models/Move.model');

router.get('/movies', async (req, res, next) => {
  try {
    const findListOfMovie = await Movie.find();
    //select('title', 'director');
    res.status(200).json(findListOfMovie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
