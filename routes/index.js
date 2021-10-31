/*
 * Student Name: Ducarmel Zephyr
 * Student number: 301178658
 * Course: COMP229
 * filename: routes/index.js
 * Midterm
 * 
 */
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
