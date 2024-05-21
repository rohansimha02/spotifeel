const Song = require('../models/Song');

exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getRecommendations = async (req, res) => {
    try {
        const { emotion } = req.query;
        const recommendations = await Song.find({ emotion });
        res.json(recommendations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
