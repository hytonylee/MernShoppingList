const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/mern-shopping-list', { useNewUrlParser: true })
    .then(() => console.log('Connected to exercise MongoDB'))
    .catch((err) => console.log('Catched error of', err.message))

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})