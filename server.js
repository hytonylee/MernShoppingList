const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Item');



const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI


// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connect to MongoDB'))
    .catch(err => console.log('there is err: ', err))

// Use Routes
app.use('/api/items', items)  //connect to line 5


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));