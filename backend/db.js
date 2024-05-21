const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/spotifeel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
