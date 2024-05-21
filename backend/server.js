const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/spotifeel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
