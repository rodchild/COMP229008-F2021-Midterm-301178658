/*
 * Student Name: Ducarmel Zephyr
 * Student number: 301178658
 * Course: COMP229
 * filename: controllers/index.js
 * Midterm
 * 
 */
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
