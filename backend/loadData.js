const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const Song = require('./models/Song');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const calculateEmotion = (song) => {
    const { danceability, energy, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo } = song;

    if (danceability > 0.7 && energy > 0.7 && valence > 0.7) return 'Happy';
    if (valence < 0.3 && acousticness > 0.5) return 'Sad';
    if (energy > 0.8 && tempo > 120) return 'Energetic';
    if (acousticness > 0.8 && energy < 0.3) return 'Calm';
    if (energy > 0.7 && valence < 0.3) return 'Angry';
    if (acousticness > 0.8 && valence > 0.5) return 'Relaxed';
    if (danceability > 0.8 && energy > 0.7 && valence > 0.6) return 'Excited';
    if (valence < 0.2 && energy < 0.2) return 'Depressed';
    if (valence > 0.6 && acousticness > 0.4 && speechiness < 0.3) return 'Romantic';
    if (valence > 0.5 && energy < 0.5 && acousticness > 0.4) return 'Mellow';

    return 'Neutral';
};

fs.createReadStream('data/data.csv')
    .pipe(csv())
    .on('data', async (row) => {
        const emotion = calculateEmotion(row);
        const newSong = new Song({ ...row, emotion });
        await newSong.save();
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        mongoose.connection.close();
    });
