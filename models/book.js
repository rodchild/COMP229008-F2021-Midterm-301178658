/*
 * Student Name: Ducarmel Zephyr
 * Student number: 301178658
 * Course: COMP229
 * filename: models/book.js
 * Midterm
 * 
 */

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);