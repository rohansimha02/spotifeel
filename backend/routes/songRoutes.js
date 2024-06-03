const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/songs', songController.getSongs);
router.get('/recommend', songController.getRecommendations);

module.exports = router;
